export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'timeline'], name: 'timeline',  moduleId: 'timeline/timeline', nav: true, title:'Timeline',  settings: 'fa fa-heartbeat'},
      { route: 'users',          name: 'users',     moduleId: 'contacts/users',    nav: true, title:'Contacts' , settings: 'fa fa-users'},
      { route: 'entry',          name: 'entry',     moduleId: 'entryCRUD/entry',   nav: true, title:'New Entry', settings: 'fa fa-stethoscope'},
      { route: 'doctor',         name: 'doctor',    moduleId: 'doctorCRUD/doctor', nav: true, title:'New Doctor',settings: 'fa fa-user-md'}      
    ]);

    this.router = router;
  }
}
