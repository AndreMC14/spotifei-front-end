import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cadastro',
  standalone: true,   
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {  constructor(private router: Router) {}

  cadastrar() {
    this.router.navigate(['/explorar']);
  }}
