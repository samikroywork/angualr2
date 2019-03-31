import { Component, ViewChild, ElementRef,ViewChildren,QueryList,AfterViewInit } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
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

  @ViewChildren(HomeComponent)
  appHomeComponents:QueryList<HomeComponent>;


  constructor(){
    console.log('in constructor '+this.appHomeComponents);
  }


  appHomeClick(){
    console.log('Click on home component');
  }

  onPassDAta(name:string){
    console.log(`Pass data is: ${name}`);
    console.log(this.homeComponent);
    console.log(this.elementP);
    console.log(this.homeComponentElementRef);
    console.log(this.appHomeComponents);
  }


  ngAfterViewInit(): void{
    console.log('in after view init '+this.appHomeComponents);
  }

}
