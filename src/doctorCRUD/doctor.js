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