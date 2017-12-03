import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './reducers';
import { TodoActions } from './reducers/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private subs = [];
  public title = ''

  public todoList = []

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: TodoActions
  ) {
    let sub = ngRedux.select(state => state.todo.list).subscribe(list => {
      this.todoList = list;
    })
    this.subs.push(sub)

    // @todo titleもstateの変更を取得
  }

  ngOnInit() {
    this.actions.get()
  }

  public ngOnDestory() {
    this.subs.forEach(s => s.unsubscribe())
  }

  public onChangeHandler(event, title: string) {
    this.actions.input(title)
  }

  public onClickAddButtonHandler(event) {
    this.actions.add();
  }

  public onClickDeleteButtonHandler(event, index: number) {
    this.actions.delete(index);
  }
}
