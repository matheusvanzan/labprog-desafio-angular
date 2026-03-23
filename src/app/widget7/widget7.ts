import { Component, Input, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { User } from '../app';

@Component({
  selector: 'app-widget7',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './widget7.html',
  styleUrl: './widget7.css',
})
export class Widget7 implements OnInit {
  @Input() user?: User;

  nomeInput: string = '';
  nomeBuscado = signal('');
  genero = signal('');
  probabilidade = signal(0);
  carregando = signal(false);
  erro = signal('');

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // comeca com o primeiro nome do usuario
    if (this.user) {
      this.nomeInput = this.user.username.split(' ')[0];
    }
    this.buscarGenero();
  }

  buscarGenero() {
    const nome = this.nomeInput.trim();
    if (!nome) return;

    this.carregando.set(true);
    this.erro.set('');
    this.genero.set('');

    this.http.get<any>(`https://api.genderize.io?name=${nome}`).subscribe({
      next: (res) => {
        this.genero.set(res.gender ?? '');
        this.probabilidade.set(res.probability ?? 0);
        this.nomeBuscado.set(res.name ?? nome);
        this.carregando.set(false);
      },
      error: () => {
        this.erro.set('Falha ao consultar a API');
        this.carregando.set(false);
      },
    });
  }

  // traduz o genero pra pt
  traduzirGenero(): string {
    if (this.genero() === 'male') return 'Masculino';
    if (this.genero() === 'female') return 'Feminino';
    return 'Não identificado';
  }

  // probabilidade em porcentagem
  probEmPorcentagem(): string {
    return (this.probabilidade() * 100).toFixed(0) + '%';
  }
}
