import { Routes } from '@angular/router';
import { MinhaBibliotecaComponent } from './components/minha-biblioteca/minha-biblioteca.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ExplorarComponent } from './components/explorar/explorar.component';
import { PlanosComponent } from './components/planos/planos.component'

export const routes: Routes = [
    {
        path: "biblioteca",
        component: MinhaBibliotecaComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: 'cadastro',
        component: CadastroComponent
    },
    {
        path: 'explorar',
        component: ExplorarComponent
    },
    {
        path: '',
        component: CadastroComponent
    },
 
    {
        path: 'planos',
        component: PlanosComponent
    }
    
];
