import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopComponent } from './top/top.component'
import { TodoComponent } from './todo/todo.component'

const routes: Routes = [
  { path: '', component: TopComponent, pathMatch: 'full' },
  { path: 'todo/:index', component: TodoComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
