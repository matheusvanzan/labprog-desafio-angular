import { Component, Input } from '@angular/core';
import { User } from '../app';

@Component({
  selector: 'app-widget7',
  imports: [],
  templateUrl: './widget7.html',
  styleUrl: './widget7.css',
})
export class Widget7 {
  @Input() user?: User;
}
