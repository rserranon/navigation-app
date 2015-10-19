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
        .withBaseUrl('http://localhost:8080/person/');
    });
    this.http = http;

    // Doctor Class variables
    this.drName = '';
    this.lastName = '';
    this.personType = 'doctor';

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
	      return this.http.fetch('save', {
	        method: 'POST',
	        headers: { "Accept": "application/json", "Content-Type": "application/json"},
	        body: JSON.stringify(datos)
	      });
	      this.drName = '';
    	  this.lastName = '';    
	  }
  }

  addTodo() {
    if (this.newTodo != '') {
      this.todos.push({
        title: this.newTodo,
        completed: false
      });
      this.todoChanged();
      this.newTodo = '';
    }      
  }	

  removeTodo(todo) {
    var idx = this.todos.indexOf(todo);
    this.todos.splice(idx, 1);
    this.todoChanged();
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

  todoChanged() {
    var countRemaining = 0;
    var countCompleted = 0;
    this.todos.forEach(function (item) {
      if (!item.completed) 
        countRemaining++; 
      else 
        countCompleted++;
    });
    this.remainingCount = countRemaining;
    this.completedCount = countCompleted;
  }

  activate(){
  }

  canDeactivate(){
    
  }
}