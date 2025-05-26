import { ComponentFixture, TestBed } from '@angular/core/testing';

import { articleComponent } from './article.component';

describe('ArticleComponent', () => {
  let component: articleComponent;
  let fixture: ComponentFixture<articleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [articleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(articleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
