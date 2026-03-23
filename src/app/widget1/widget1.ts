import { Component, Input } from '@angular/core';
import { User } from '../app';

@Component({
  selector: 'app-widget1',
  imports: [],
  templateUrl: './widget1.html',
  styleUrl: './widget1.css',
})
export class Widget1 {
  @Input() user?: User;
}
