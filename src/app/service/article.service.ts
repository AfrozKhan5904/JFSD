import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private baseUrl = 'http://localhost:8080/api/articles';

  constructor(private http: HttpClient) {}

  getAllArticles(): Observable<article[]> {
    return this.http.get<article[]>(this.baseUrl);
  }

  getArticleById(id: number): Observable<article> {
    return this.http.get<article>(`${this.baseUrl}/${id}`);
  }

  createArticle(article: article): Observable<article> {
    return this.http.post<article>(this.baseUrl, article);
  }

  deleteArticle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}