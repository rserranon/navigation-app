import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Users{
  heading = 'Github Users';
  users = [];

  constructor(http){
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });

    this.http = http;
  }

  activate(){
    return this.http.fetch('users')
      .then(response => response.json())
      .then(users => { 
        this.users = users;
        for(var key in users) {
            var val = users[key];
            console.log("Key: "+key+" value:"+val);
        };
        console.log('Users -> ' + Object.keys(users));
      });      
  }
}
