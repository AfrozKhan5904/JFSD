import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryListComponent } from './summary-list.component';

describe('SummaryListComponent', () => {
  let component: SummaryListComponent;
  let fixture: ComponentFixture<SummaryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
