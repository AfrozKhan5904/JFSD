import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { summaryservice } from '../../service/summary.service';
import { summary } from '../../models/summary';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary-details',
  imports:[CommonModule],
  templateUrl: './summary-detail.component.html',
})
export class SummaryDetailsComponent implements OnInit {
  summary?: summary;
  loading = true;
  error = '';

  constructor(private route: ActivatedRoute, private summaryService: summaryservice) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.summaryService.getSummaryByArticleId(id).subscribe({
      next: (data: any) => {
        this.summary = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Summary not found';
        this.loading = false;
      }
    });
  }
}