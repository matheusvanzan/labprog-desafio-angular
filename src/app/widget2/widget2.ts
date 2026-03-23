import { Component, Input, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { User } from '../app';

interface DadJokeResponse {
  id: string;
  joke: string;
  status: number;
}

@Component({
  selector: 'app-widget2',
  imports: [CommonModule],
  templateUrl: './widget2.html',
  styleUrl: './widget2.css',
  providers: [],
})
export class Widget2 implements OnInit {
  @Input() user?: User;

  joke = signal<string>('');
  loading = signal<boolean>(false);
  error = signal<string>('');

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchJoke();
  }

  fetchJoke(): void {
    this.loading.set(true);
    this.error.set('');
    this.joke.set('');

    this.http
      .get<DadJokeResponse>('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' },
      })
      .subscribe({
        next: (data) => {
          this.joke.set(data.joke);
          this.loading.set(false);
        },
        error: () => {
          this.error.set('Não foi possível carregar a piada. Tente novamente.');
          this.loading.set(false);
        },
      });
  }
}
