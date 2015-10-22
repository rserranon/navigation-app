import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

import 'fetch';

@inject(HttpClient)
export class Doctor{
  heading = 'Doctors';

  static inject() { return []; }

  constructor(http){
  	http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost:8080/');
    });
    this.http = http;

    // Doctor Class variables
    this.drName = '';
    this.lastName = '';
    this.personType = 'doctor';
    this.doctorChanged();

    this.newTodo = '';
    this.todos = [];
    this.remainingCount = 0;
    this.completedCount = 0;
    this.editedTodo = {title: '', completed: false};
    this.allChecked = false;
  }

  addDoctor() {
  	if (this.drName != '' && this.lastName != '') {
	      var datos = {'name': this.drName, 'lastName': this.lastName, 'type': this.personType};
	      return this.http.fetch('person/save', {
	        method: 'POST',
	        headers: { "Accept": "application/json", "Content-Type": "application/json"},
	        body: JSON.stringify(datos)
	      }) 
        .then(response => { 
          this.drName = '';
          this.lastName = '';
          this.doctorChanged();  
        })
        .catch( function(err) {
          console.error ("Vivany ERROR", err)
        })      
                 
	   }
  }

  removeDoctor(doctor) {
    console.log ('Id: ' + doctor.id);
    return this.http.fetch('person/delete/'+doctor.id, {
      method: 'DELETE',
      headers: { "Accept": "application/json", "Content-Type": "application/json"}
    })
    .then( response => this.doctorChanged() )
    .catch( function(err) {
        console.error ("Vivany ERROR", err)
    })

  }

  editTodo(todo) {
    this.editedTodo = todo;
  }

  markAll(allChecked) {
    if (allChecked) {
      this.todos.forEach(function (item) {
        item.completed = true;
      });
    } else {
      this.todos.forEach(function (item) {
        item.completed = false;
      });
    }
    this.todoChanged();
  }

  clearCompleted() {
    for (var i = this.todos.length - 1; i >= 0; i--) {
      if (this.todos[i]) {
        if (this.todos[i].completed) {
          this.todos.splice(i, 1);
          i++;
        }
      }
    };
  }

  doctorChanged() {
      return this.http.fetch('person/doctors.json', {
          method: 'GET',
          headers: { "Accept": "application/json", "Content-Type": "application/json"}
        })
      .catch( function(err) {
          console.error ("Vivany ERROR", err)
      })
      .then(response => response.json())
      .then(persons  => this.doctors = persons)
      

  }

  activate(){
  }

  canDeactivate(){
    
  }
}