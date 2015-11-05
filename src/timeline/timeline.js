import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Timeline{
  heading = 'Timeline';
  timeline = [];

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
                console.log(response);
                return response; // you can return a modified Response
            }
        });	
    this.http = http;
	}
  )}

  activate(){
    return this.http.fetch('person/myTimeline/5.json')
      .then(response => response.json())
      .then(timeline => { 
        this.timeline = timeline;
        for(var key in timeline.content.years) {
            var val = timeline.content.years[key];
            console.log("TIMELINE: "+key+" value:"+val);
        };
        console.log('timeline -> ' + Object.keys(timeline));
      });      
  }
}

