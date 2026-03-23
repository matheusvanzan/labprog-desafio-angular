import { Component, Input } from '@angular/core';
import { User } from '../app';

@Component({
  selector: 'app-widget2',
  imports: [],
  templateUrl: './widget2.html',
  styleUrl: './widget2.css',
})
export class Widget2 {
  @Input() user?: User;
}
