import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvnAddEditComponent } from './cvn-add-edit.component';

describe('CvnAddEditComponent', () => {
  let component: CvnAddEditComponent;
  let fixture: ComponentFixture<CvnAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvnAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvnAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
