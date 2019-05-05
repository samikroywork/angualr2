import { Injectable } from '@angular/core';
import { MessageProvider } from '../message.provider';

@Injectable()
export class WsMessageProviderService implements MessageProvider {
  getMessage(): string {
    return "ws";
  }


  constructor() { }
}
