import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListassignmentComponent } from './listassignment.component';

describe('ListassignmentComponent', () => {
  let component: ListassignmentComponent;
  let fixture: ComponentFixture<ListassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListassignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
