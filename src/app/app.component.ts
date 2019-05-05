import { Component, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewInit, OnInit, Inject } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HelloService } from './services/hello.service';
import { RssMessageProviderService } from './services/rss-message-provider.service';
import { MessageProvider } from './message.provider';
import { WsMessageProviderService } from './services/ws-message-provider.service';

export function buildHelloService(){
  return new HelloService();
}

let messageProviderFactory=()=> new WsMessageProviderService();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[{
    provide:HelloService,
    useFactory:buildHelloService
  },
  {
    provide:'MessageProvider',
    useFactory:messageProviderFactory
  }]
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'angular-training';
  sample = "hello wOrld";
  message:string;
  now = new Date();
  items = [{
    name: "samik"
  },
  {
    name: "name2"
  }, {
    name: "name3"
  }];

  @ViewChild(HomeComponent)
  homeComponent: HomeComponent;

  @ViewChild(HomeComponent, { read: ElementRef })
  homeComponentElementRef: ElementRef;

  @ViewChild('p')
  elementP: ElementRef;

  @ViewChildren(HomeComponent)
  appHomeComponents: QueryList<HomeComponent>;


  constructor(private helloService: HelloService,@Inject('MessageProvider') private messaageProvider:MessageProvider) {
    console.log('in constructor ' + this.appHomeComponents);
  }


  appHomeClick() {
    console.log('Click on home component');
  }

  onPassDAta(name: string) {
    console.log(`Pass data is: ${name}`);
    console.log(this.homeComponent);
    console.log(this.elementP);
    console.log(this.homeComponentElementRef);
    console.log(this.appHomeComponents);
  }


  ngAfterViewInit(): void {
    console.log('in after view init ' + this.appHomeComponents);
  }

  ngOnInit(): void {
    this.message=this.messaageProvider.getMessage();
  }
}
