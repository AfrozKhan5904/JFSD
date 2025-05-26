import { Component, OnInit } from '@angular/core';
import { summaryservice } from '../../service/summary.service';
import { summary } from '../../models/summary';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-summary-list',
  imports:[CommonModule,RouterLink],
  templateUrl: './summary-list.component.html',
})
export class SummaryListComponent implements OnInit {
  summaries: summary[] = [];
  loading = true;
  error = '';

  constructor(private SummaryService: summaryservice) {}

  ngOnInit() {
    this.SummaryService.getAllSummaries().subscribe({
      next: (data: summary[]) => {
        this.summaries = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load summaries';
        this.loading = false;
      },
    });
  }
}