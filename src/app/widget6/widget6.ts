import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../app';

@Component({
  selector: 'app-widget6',
  imports: [CommonModule],
  templateUrl: './widget6.html',
  styleUrl: './widget6.css',
})
export class Widget6 implements OnInit {
  @Input() user?: User;

  estimatedAge: number | null = null;
  loading: boolean = false;
  error: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (this.user?.username) {
      this.loadAge();
    }
  }

  loadAge(): void {
    if (!this.user?.username) return;

    this.loading = true;
    this.error = false;
    this.estimatedAge = null;

    fetch(`https://api.agify.io?name=${this.user.username}`)
      .then(response => response.json())
      .then(data => {
        this.estimatedAge = data.age;
        this.loading = false;
        this.cdr.detectChanges();
      })
      .catch(error => {
        console.error('Erro:', error);
        this.error = true;
        this.loading = false;
        this.cdr.detectChanges();
      });
  }
}