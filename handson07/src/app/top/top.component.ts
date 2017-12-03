import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../reducers';
import { TodoActions } from '../reducers/todo';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent {

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

    sub = ngRedux.select(state => state.todo.input).subscribe(input => {
      this.title = input;
    })
    this.subs.push(sub)
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
