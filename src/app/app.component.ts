import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { articleComponent } from './components/article/article.component';
import { SummaryComponent } from './components/summary/summary.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,articleComponent,SummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'article';
}
