import { Injectable } from '@angular/core';


@Injectable({
    providedIn:"root"
})
export class WorldService {
  constructor() {
  }

  sayHello(): string {
    return "Hello";
  }
}


/*
new HelloService();

*/