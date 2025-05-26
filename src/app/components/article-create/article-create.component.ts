import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../service/article.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { article } from '../../models/article';

@Component({
  selector: 'app-article-create',
  imports:[CommonModule,FormsModule],
  templateUrl: './article-create.component.html',
})
export class ArticleCreateComponent {
  title = '';
  content = '';
  error = '';

  constructor(private articleservice: ArticleService, private router: Router) {}

  createArticle() {
  // Validate input
  if (!this.title.trim() || !this.content.trim()) {
    this.error = 'Title and content are required';
    return;
  }

  // Create the article object (ID and created_at are handled by backend)
  const newArticle: article = {
    id: 0, // placeholder, backend will generate ID
    title: this.title.trim(),
    content: this.content.trim()
  };

  // Call the service to create the article
  this.articleservice.createArticle(newArticle).subscribe({
    next: (response) => {
      // Navigate on success
      this.router.navigate(['/articles']);
    },
    error: (err) => {
      console.error('Article creation failed', err);
      this.error = 'Failed to create article';
    }
  });
  }
}