import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-training';
  items=[{
    name:"samik"
  },
  {
    name:"name2"
  },{
    name:"name3"
  }];

  appHomeClick(){
    console.log('Click on home component');
  }

  onPassDAta(name:string){
    console.log(`Pass data is: ${name}`);
  }

}
