import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentbybatchComponent } from './studentbybatch.component';

describe('StudentbybatchComponent', () => {
  let component: StudentbybatchComponent;
  let fixture: ComponentFixture<StudentbybatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentbybatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentbybatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
