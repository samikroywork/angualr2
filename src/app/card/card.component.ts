import { Component, OnInit } from '@angular/core';
import { HelloService } from '../services/hello.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  constructor(private helloService: HelloService) { 
    console.log(`Hello service count: ${helloService.id}`);
  }

  ngOnInit() {
  }

}
