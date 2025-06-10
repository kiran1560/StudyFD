import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherheaderComponent } from './teacherheader.component';

describe('TeacherheaderComponent', () => {
  let component: TeacherheaderComponent;
  let fixture: ComponentFixture<TeacherheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
