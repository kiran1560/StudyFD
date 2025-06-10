import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListassignbatchComponent } from './listassignbatch.component';

describe('ListassignbatchComponent', () => {
  let component: ListassignbatchComponent;
  let fixture: ComponentFixture<ListassignbatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListassignbatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListassignbatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
