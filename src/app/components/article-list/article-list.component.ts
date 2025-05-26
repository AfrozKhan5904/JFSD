import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../service/article.service';
import { article } from '../../models/article';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-article-list',
  imports:[CommonModule,RouterLink],
  templateUrl: './article-list.component.html',
})
export class ArticleListComponent implements OnInit {
  articles: article[] = [];
  loading = true;
  error = '';

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articleService.getAllArticles().subscribe({
      next: (data: article[]) => {
        this.articles = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Error loading articles';
        this.loading = false;
      }
    });
  }
}