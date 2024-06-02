import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvvdetailComponent } from './cvvdetail.component';

describe('CvvdetailComponent', () => {
  let component: CvvdetailComponent;
  let fixture: ComponentFixture<CvvdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvvdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvvdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
