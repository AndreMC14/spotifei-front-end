import { Component } from '@angular/core';
import { BibliotecaCardComponent } from '../minha-biblioteca/biblioteca-card/biblioteca-card.component'
import { NgFor } from '@angular/common';
import { Musica } from './biblioteca-card/Musica';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-minha-biblioteca',
  standalone: true,
  imports: [BibliotecaCardComponent, NgFor],
  templateUrl: './minha-biblioteca.component.html',
  styleUrl: './minha-biblioteca.component.css'
})
export class MinhaBibliotecaComponent {
  musicas: Musica[] = [
    {
      id: 1,
      descricao: "Billie Jean By Michael Jackson",
      datapublicacao: new Date('1983-01-02'),
      playlistid: 1
    },
    {
      id: 2,
      descricao: "Sorry By Justin Bieber",
      datapublicacao: new Date('2015-10-22'),
      playlistid: 2
    }]
     constructor (private http : HttpClient) {}

  ngOnInit(): void {
    this.http.get<Musica[]>("http://localhost:4200/api/musicas")
    .subscribe((musicas) => this.musicas = musicas);
  }
}
