import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddassignbatchComponent } from './addassignbatch.component';

describe('AddassignbatchComponent', () => {
  let component: AddassignbatchComponent;
  let fixture: ComponentFixture<AddassignbatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddassignbatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddassignbatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
