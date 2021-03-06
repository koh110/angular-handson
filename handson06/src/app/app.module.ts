import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ReducerModule } from './reducers/reducer.module';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReducerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
