import { Component, Input } from '@angular/core';
import { User } from '../app';

@Component({
  selector: 'app-widget5',
  imports: [],
  templateUrl: './widget5.html',
  styleUrl: './widget5.css',
})
export class Widget5 {
  @Input() user?: User;
}
