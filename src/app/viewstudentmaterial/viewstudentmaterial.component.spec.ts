import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstudentmaterialComponent } from './viewstudentmaterial.component';

describe('ViewstudentmaterialComponent', () => {
  let component: ViewstudentmaterialComponent;
  let fixture: ComponentFixture<ViewstudentmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewstudentmaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstudentmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
