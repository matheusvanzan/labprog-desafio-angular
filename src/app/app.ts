import { Component, signal } from '@angular/core';
import { Widget1 } from './widget1/widget1';
import { Widget2 } from './widget2/widget2';
import { Widget3 } from './widget3/widget3';
import { Widget4 } from './widget4/widget4';
import { Widget5 } from './widget5/widget5';
import { Widget6 } from './widget6/widget6';
import { Widget7 } from './widget7/widget7';

export interface User {
  username: string;
  email: string;
}

@Component({
  selector: 'app-root',
  imports: [Widget1, Widget2, Widget3, Widget4, Widget5, Widget6, Widget7],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dashboard');
  protected readonly user = signal<User>({
    username: 'John Doe',
    email: 'john@example.com'
  });
}
