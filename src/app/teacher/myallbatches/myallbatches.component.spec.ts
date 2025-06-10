import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyallbatchesComponent } from './myallbatches.component';

describe('MyallbatchesComponent', () => {
  let component: MyallbatchesComponent;
  let fixture: ComponentFixture<MyallbatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyallbatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyallbatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
