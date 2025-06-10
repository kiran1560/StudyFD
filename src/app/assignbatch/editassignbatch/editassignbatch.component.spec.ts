import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditassignbatchComponent } from './editassignbatch.component';

describe('EditassignbatchComponent', () => {
  let component: EditassignbatchComponent;
  let fixture: ComponentFixture<EditassignbatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditassignbatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditassignbatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
