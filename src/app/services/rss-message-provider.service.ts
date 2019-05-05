import { Injectable } from '@angular/core';
import { MessageProvider } from '../message.provider';

@Injectable()
export class RssMessageProviderService implements MessageProvider {
  getMessage(): string {
    return "rss";
  }


  constructor() { }
}
