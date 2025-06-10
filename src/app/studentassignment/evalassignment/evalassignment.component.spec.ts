import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalassignmentComponent } from './evalassignment.component';

describe('EvalassignmentComponent', () => {
  let component: EvalassignmentComponent;
  let fixture: ComponentFixture<EvalassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvalassignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
