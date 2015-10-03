export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'timeline'], name: 'timeline', moduleId: 'timeline', nav: true, title:'Timeline',  settings: 'fa fa-heartbeat'},
      { route: 'users',          name: 'users',    moduleId: 'users',    nav: true, title:'Contacts' , settings: 'fa fa-users'},
      { route: 'entry',          name: 'entry',    moduleId: 'entry',    nav: true, title:'New Entry', settings: 'fa fa-stethoscope'}      
    ]);

    this.router = router;
  }
}
