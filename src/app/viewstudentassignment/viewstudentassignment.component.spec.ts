import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstudentassignmentComponent } from './viewstudentassignment.component';

describe('ViewstudentassignmentComponent', () => {
  let component: ViewstudentassignmentComponent;
  let fixture: ComponentFixture<ViewstudentassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewstudentassignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstudentassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
