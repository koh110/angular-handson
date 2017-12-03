import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnChanges {
  @Input() public title: string = ''
  @Input() public desc: string = ''

  constructor() { }

  ngOnInit() {
  }

  // inputが変化した時に動く関数
  ngOnChanges(changes) {
    console.log(changes)
  }
}
