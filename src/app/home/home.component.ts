import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  @Input()
  name: string;

  @Output()
  passDataEvent = new EventEmitter<string>();


  @Input('other')
  otherName: string;


  constructor() { }

  ngOnInit() {
  }

  passData() {
    this.passDataEvent.emit(this.name);
  }

}
