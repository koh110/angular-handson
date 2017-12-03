import { Component, OnChanges, Input } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../reducers/index';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnChanges {
  @Input() public index: number = null

  private subs = []
  public title = ''

  constructor(private ngRedux: NgRedux<IAppState>) {
    const sub = ngRedux.select(state => state.todo.list).subscribe(this.setTitle.bind(this))
  }

  public ngOnDestory() {
    this.subs.forEach(s => s.unsubscribe())
  }

  private setTitle() {
    const { list } = this.ngRedux.getState().todo

    if (!list || this.index === null) {
      return
    }

    this.title = list[this.index].title
  }

  public ngOnChanges(changes) {
    this.setTitle()
  }
}
