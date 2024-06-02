import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvvAddEditComponent } from './cvv-add-edit.component';

describe('CvvAddEditComponent', () => {
  let component: CvvAddEditComponent;
  let fixture: ComponentFixture<CvvAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvvAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvvAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
