import { Component, OnChanges, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../reducers/index';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnChanges {

  private subs = []
  public title = ''

  constructor(
    private route: ActivatedRoute,
    private ngRedux: NgRedux<IAppState>
  ) {
    const sub = ngRedux.select(state => state.todo.list).subscribe(this.setTitle.bind(this))
  }

  ngOnInit(): void {
  }

  public ngOnDestory() {
    this.subs.forEach(s => s.unsubscribe())
  }

  private setTitle() {
    const index = this.route.snapshot.paramMap.get('index')

    const { list } = this.ngRedux.getState().todo

    if (list.length <= 0) {
      return
    }

    this.title = list[index].title
  }

  public ngOnChanges(changes) {
    this.setTitle()
  }
}
