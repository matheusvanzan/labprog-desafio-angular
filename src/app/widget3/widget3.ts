import { Component, OnInit, inject, Input, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { User } from '../app';

interface DogResponse {
  message: string;
  status: string;
}

@Component({
  selector: 'app-widget3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget3.html',
  styleUrl: './widget3.css',
})
export class Widget3 implements OnInit {
  @Input() user?: User;
  
  private http = inject(HttpClient);

  dogImageUrl = signal<string | null>(null);
  loading = signal<boolean>(false);
  error = signal<boolean>(false);

  ngOnInit(): void {
    this.fetchDogImage();
  }

  fetchDogImage(): void {
    this.loading.set(true);
    this.error.set(false);
    
    this.http.get<DogResponse>('https://dog.ceo/api/breeds/image/random')
      .subscribe({
        next: (data: DogResponse) => {
          console.log('Dados recebidos:', data.message);
          this.dogImageUrl.set(data.message);
          this.loading.set(false);
        }
      });
  }
}