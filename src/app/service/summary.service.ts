import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { summary } from '../models/summary';

@Injectable({
  providedIn: 'root'
})
export class summaryservice {
  private baseUrl = 'http://localhost:8080/api/summaries';

  constructor(private http: HttpClient) {}

  getAllSummaries(): Observable<summary[]> {
    return this.http.get<summary[]>(this.baseUrl);
  }

  getSummaryByArticleId(articleId: number): Observable<summary> {
    return this.http.get<summary>(`${this.baseUrl}/article/${articleId}`);
  }

  createSummary(summary: summary): Observable<summary> {
    return this.http.post<summary>(this.baseUrl, summary);
  }

  deleteSummary(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}