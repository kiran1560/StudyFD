import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbatchesComponent } from './listbatches.component';

describe('ListbatchesComponent', () => {
  let component: ListbatchesComponent;
  let fixture: ComponentFixture<ListbatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListbatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
