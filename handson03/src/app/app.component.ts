import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app';

  public todoList = [
    { title: 'ほげ' },
    { title: 'ふが' },
    { title: 'ぴよ' }
  ];
}
