import { Component } from '@angular/core';
import { BibliotecaCardComponent } from '../minha-biblioteca/biblioteca-card/biblioteca-card.component'

@Component({
  selector: 'app-minha-biblioteca',
  standalone: true,
  imports: [BibliotecaCardComponent],
  templateUrl: './minha-biblioteca.component.html',
  styleUrl: './minha-biblioteca.component.css'
})
export class MinhaBibliotecaComponent {

}
