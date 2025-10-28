import { Component, Input } from '@angular/core';
import { Musica } from '../biblioteca-card/Musica';

@Component({
  selector: 'app-biblioteca-card',
  standalone: true,
  imports: [],
  templateUrl: './biblioteca-card.component.html',
  styleUrl: './biblioteca-card.component.css'
})
export class BibliotecaCardComponent {
  @Input()
  musica: Musica = {
    titulo: "",
    genero: "",
    imagem: ""
  }
}
