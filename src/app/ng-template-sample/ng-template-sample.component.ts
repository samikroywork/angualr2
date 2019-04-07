import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template-sample',
  templateUrl: './ng-template-sample.component.html',
  styleUrls: ['./ng-template-sample.component.css']
})
export class NgTemplateSampleComponent implements OnInit {

  templates=['customContainer1','customContainer2'];
  currentTemplate:string;
  index:number=-1;
  data:"sample data";
  sampleContext={
    name:"samik"
  }
  constructor() { }

  ngOnInit() {
    /* setInterval(()=>{
        this.index= this.index == this.templates.length-1? 0:this.index+1;
        this.currentTemplate=this.templates[this.index];
    },2000); */
  }

}
