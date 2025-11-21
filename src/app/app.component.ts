import { Component } from '@angular/core';
import { LoginComponent } from './components/login/login.component'; 
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { RouterOutlet } from '@angular/router';
import { ExplorarComponent } from './components/explorar/explorar.component';
import {MinhaBibliotecaComponent} from './components/minha-biblioteca/minha-biblioteca.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MinhaBibliotecaComponent,CadastroComponent,ExplorarComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
