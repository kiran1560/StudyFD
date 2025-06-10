import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbatchesComponent } from './editbatches.component';

describe('EditbatchesComponent', () => {
  let component: EditbatchesComponent;
  let fixture: ComponentFixture<EditbatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditbatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
