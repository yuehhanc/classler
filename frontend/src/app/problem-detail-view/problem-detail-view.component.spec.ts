import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemDetailViewComponent } from './problem-detail-view.component';

describe('ProblemDetailViewComponent', () => {
  let component: ProblemDetailViewComponent;
  let fixture: ComponentFixture<ProblemDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
