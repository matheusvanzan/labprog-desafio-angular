import { Component, Input } from '@angular/core';
import { User } from '../app';

@Component({
  selector: 'app-widget3',
  imports: [],
  templateUrl: './widget3.html',
  styleUrl: './widget3.css',
})
export class Widget3 {
  @Input() user?: User;
}
