import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../service/article.service';
import { summaryservice } from '../../service/summary.service';
import { article } from '../../models/article';
import { summary } from '../../models/summary';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-details',
  imports:[CommonModule],
  templateUrl: './article-detail.component.html',
})
export class ArticleDetailsComponent implements OnInit {
  article?: article;
  summary?: summary;
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private ArticleService: ArticleService,
    private summaryService: summaryservice
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ArticleService.getArticleById(id).subscribe({
      next: ArticleData => {
        this.article = ArticleData;
        // Load summary for this article
        this.summaryService.getSummaryByArticleId(id).subscribe({
          next: SummaryData => {
            this.summary = SummaryData;
            this.loading = false;
          },
          error: () => {
            this.error = 'Failed to load summary';
            this.loading = false;
          }
        });
      },
      error: () => {
        this.error = 'Article not found';
        this.loading = false;
      }
    });
  }
}