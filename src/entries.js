import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Entries{
  heading = 'Entries';
  entries = [];

  constructor(http){
    http.configure(config => {
        config
        .withBaseUrl('http://rsn.com:8080/')
        .withDefaults({
            headers: {
                'Accept': 'application/json',
                'X-Requested-With': 'Fetch'
            }
        })
        .withInterceptor({
            request(request) {
                console.log(`Requesting ${request.method} ${request.url}`);
                return request; // you can return a modified Request, or you can short-circuit the request by returning a Response
            },
            response(response) {
                console.log(`Received ${response.status} ${response.url}`);
                return response; // you can return a modified Response
            }
        });	
    this.http = http;
	}
  )}

  activate(){
    return this.http.fetch('entry/index.json')
      .then(response => response.json())
      .then(entries =>  this.entries = entries);
  }
}

