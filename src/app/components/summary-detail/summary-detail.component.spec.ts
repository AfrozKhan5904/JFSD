import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryDetailComponent } from './summary-detail.component';

describe('SummaryDetailComponent', () => {
  let component: SummaryDetailComponent;
  let fixture: ComponentFixture<SummaryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
