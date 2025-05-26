// src/app/article/article.component.ts
import { Component, Input } from '@angular/core';
import { article } from '../../models/article';
import { ArticleCreateComponent } from '../article-create/article-create.component';
import { ArticleDetailsComponent } from '../article-detail/article-detail.component';
import { ArticleListComponent } from '../article-list/article-list.component';

@Component({
  selector: 'app-article',
  imports:[ArticleCreateComponent,ArticleDetailsComponent,ArticleListComponent],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class articleComponent {
  @Input() article!: article;
}