import { Component, Input, signal } from '@angular/core';
import { User } from '../app';
import { CommonModule } from '@angular/common';

type SlipResponse = {
  slip?: {
    id?: number;
    advice?: string;
  };
};

@Component({
  selector: 'app-widget1',
  imports: [CommonModule],
  templateUrl: './widget1.html',
  styleUrl: './widget1.css',
})
export class Widget1{
  @Input() user?: User;

  data = signal<SlipResponse | null>(null);
  loading = signal<boolean>(false);
  error = signal<string | null>(null)

  async fetchData(): Promise<void> {
    this.loading.set(true);
    this.error.set(null);

    try{
      const response = await fetch('https://api.adviceslip.com/advice');
      if(!response.ok){
        throw new Error(`Erro: ${response.status}`);
      }
      const dataJson = (await response.json()) as SlipResponse;

      this.data.set(dataJson);

      console.log(this.data()?.slip?.advice);
      console.log(this.data()?.slip?.id);

    } catch (error: any) {
      this.error.set(error.message);
      console.error('Erro:', error);
    } finally {
      this.loading.set(false);
    }
  }

}
