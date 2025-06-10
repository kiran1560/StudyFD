import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbatchesComponent } from './addbatches.component';

describe('AddbatchesComponent', () => {
  let component: AddbatchesComponent;
  let fixture: ComponentFixture<AddbatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
