import { Component } from '@angular/core';
import { BibliotecaCardComponent } from '../minha-biblioteca/biblioteca-card/biblioteca-card.component'
import { NgFor } from '@angular/common';
import { Musica } from './biblioteca-card/Musica';

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
      titulo: "Musica bonita",
      genero: "bunitez"
    },
    {
      titulo: "Musica feia",
      genero: "feiez"
    }]
}
