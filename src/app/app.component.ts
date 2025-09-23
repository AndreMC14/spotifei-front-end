import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [RouterOutlet, SearchPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Spotifei';
}
