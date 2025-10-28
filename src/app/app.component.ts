import { Component } from '@angular/core';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RouterOutlet } from '@angular/router';
import {MinhaBibliotecaComponent} from './components/minha-biblioteca/minha-biblioteca.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CadastroComponent],  
  imports: [RouterOutlet,MinhaBibliotecaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
