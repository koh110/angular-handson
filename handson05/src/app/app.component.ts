import { Component } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AppService ]
})
export class AppComponent {
  public title = ''

  public todoList = []

  constructor(private appService: AppService) {}

  ngOnInit() {
  }

  public onChangeHandler(event, title: string) {
    this.title = title
  }

  public onClickAddButtonHandler(event) {
    this.todoList.push({title: this.title})
    this.title = ''
  }

  public onClickDeleteButtonHandler(event, index: number) {
    this.todoList.splice(index, 1)
  }
}
