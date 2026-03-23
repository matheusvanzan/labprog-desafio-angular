import { Component, Input } from '@angular/core';
import { User } from '../app';

@Component({
  selector: 'app-widget4',
  imports: [],
  templateUrl: './widget4.html',
  styleUrl: './widget4.css',
})
export class Widget4 {
  @Input() user?: User;
}
