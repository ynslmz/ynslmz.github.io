import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  title = 'Yunus ÖLMEZ';
  constructor(title: Title) {
    title.setTitle(this.title);
  }
}
