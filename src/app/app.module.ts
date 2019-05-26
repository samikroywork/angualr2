import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomContainerComponent } from './custom-container/custom-container.component';
import { CardComponent } from './card/card.component';
import { NgTemplateSampleComponent } from './ng-template-sample/ng-template-sample.component';
import { HighlightDirective } from './directives/highlight.directive';
import { NgXUnlessDirective } from './directives/ng-xunless.directive';
import { HttpClientModule } from '@angular/common/http';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomContainerComponent,
    CardComponent,
    NgTemplateSampleComponent,
    HighlightDirective,
    NgXUnlessDirective,
    TodosComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
