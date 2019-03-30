import { Component, ViewChild, ElementRef } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-training';
  sample="hello wOrld";
  now=new Date();
  items=[{
    name:"samik"
  },
  {
    name:"name2"
  },{
    name:"name3"
  }];

  @ViewChild(HomeComponent)
  homeComponent:HomeComponent;

  @ViewChild(HomeComponent,{read:ElementRef})
  homeComponentElementRef:ElementRef;

  @ViewChild('p')
  elementP:ElementRef;



  appHomeClick(){
    console.log('Click on home component');
  }

  onPassDAta(name:string){
    console.log(`Pass data is: ${name}`);
    console.log(this.homeComponent);
    console.log(this.elementP);
    console.log(this.homeComponentElementRef);
  }

}
