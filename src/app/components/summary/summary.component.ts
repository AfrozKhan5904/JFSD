// src/app/summary/summary.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { SummaryDetailsComponent } from '../summary-detail/summary-detail.component';
import { SummaryListComponent } from '../summary-list/summary-list.component';
import { summary } from '../../models/summary';

@Component({
  selector: 'app-summary',
  imports:[SummaryDetailsComponent,SummaryListComponent],
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Input() summary!: summary;
  parsedTree: any;

  ngOnInit(): void {
    this.parsedTree = typeof this.summary.summaryTree === 'string'
      ? JSON.parse(this.summary.summaryTree)
      : this.summary.summaryTree;
  }

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}