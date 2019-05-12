import { Injectable } from '@angular/core';

let count = 0;

@Injectable()
export class HelloService {
  id: number;
  constructor() {
    this.id = ++count;
  }

  sayHello(): string {
    return "Hello";
  }
}


/*
new HelloService();

*/