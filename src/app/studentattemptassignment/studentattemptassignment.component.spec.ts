import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentattemptassignmentComponent } from './studentattemptassignment.component';

describe('StudentattemptassignmentComponent', () => {
  let component: StudentattemptassignmentComponent;
  let fixture: ComponentFixture<StudentattemptassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentattemptassignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentattemptassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
