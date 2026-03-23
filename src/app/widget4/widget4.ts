import { Component, Input, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../app';

@Component({
  selector: 'app-widget4',
  imports: [],
  templateUrl: './widget4.html',
  styleUrl: './widget4.css',
})
export class Widget4 implements OnInit {
  @Input() user?: User;
  private http = inject(HttpClient);

  fact: string = '';
  loading = signal(false)
  error: string = '';

  ngOnInit() {
    this.fetchFact();
  }

  fetchFact() {
    this.loading.set(true);
    this.error = '';
    this.fact = '';

    this.http.get<any>('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en')
      .subscribe({
        next: (response) => {
          this.fact = response.text;
          this.loading.set(false);
        },
        error: (err) => {
          this.error = 'Erro ao carregar fato.';
          this.loading.set(false);
        }
      });
  }
}