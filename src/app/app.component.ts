import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component'; 
import { CadastroComponent } from './cadastro/cadastro.component';
import { RouterOutlet } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import {MinhaBibliotecaComponent} from './components/minha-biblioteca/minha-biblioteca.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [RouterOutlet,MinhaBibliotecaComponent,CadastroComponent,SearchPageComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
