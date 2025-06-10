import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentallbatchesComponent } from './studentallbatches.component';

describe('StudentallbatchesComponent', () => {
  let component: StudentallbatchesComponent;
  let fixture: ComponentFixture<StudentallbatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentallbatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentallbatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
