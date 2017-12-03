import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnChanges {
  @Input() public title: string = ''

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
  }
}
