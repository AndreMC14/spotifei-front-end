import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExplorarComponent } from './components/explorar/explorar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ExplorarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Spotifei';
}
