import { Injectable } from '@angular/core';

@Injectable()
export class HelloService {

  constructor() { }

  sayHello():string{
    return "Hello";
  }
}


/*
new HelloService();

*/