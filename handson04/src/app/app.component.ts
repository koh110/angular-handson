import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = ''

  public todoList = [
    { title: 'ほげ' },
    { title: 'ふが' },
    { title: 'ぴよ' }
  ]

  public onChangeHandler(event) {
    this.title = event.target.value
  }

  public onClickAddButtonHandler(event) {
    this.todoList.push({title: this.title})
    this.title = ''
  }
}
