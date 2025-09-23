import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MinhaBibliotecaComponent} from './components/minha-biblioteca/minha-biblioteca.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MinhaBibliotecaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Spotifei';
}
