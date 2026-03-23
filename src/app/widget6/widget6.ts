import { Component, Input } from '@angular/core';
import { User } from '../app';

@Component({
  selector: 'app-widget6',
  imports: [],
  templateUrl: './widget6.html',
  styleUrl: './widget6.css',
})
export class Widget6 {
  @Input() user?: User;
}
