import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, OnInit, inject, signal } from '@angular/core';
import { User } from '../app';

type RandomQuoteResponse = {
  id: number;
  quote: string;
  author: string;
};

@Component({
  selector: 'app-widget5',
  imports: [],
  templateUrl: './widget5.html',
  styleUrl: './widget5.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Widget5 implements OnInit {
  @Input() user?: User;

  readonly quote = signal<RandomQuoteResponse | null>(null);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://dummyjson.com/quotes/random';

  ngOnInit(): void {
    this.loadQuote();
  }

  loadQuote(): void {
    this.loading.set(true);
    this.error.set(null);
    this.quote.set(null);

    this.http.get<RandomQuoteResponse>(this.apiUrl).subscribe({
      next: (response) => {
        if (!response.quote || !response.author) {
          this.error.set('A API retornou uma citacao invalida.');
          this.loading.set(false);
          return;
        }

        this.quote.set(response);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Nao foi possivel carregar a citacao agora.');
        this.loading.set(false);
      },
    });
  }
}
