import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllassignmentComponent } from './allassignment.component';

describe('AllassignmentComponent', () => {
  let component: AllassignmentComponent;
  let fixture: ComponentFixture<AllassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllassignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
