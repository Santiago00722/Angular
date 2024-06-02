import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvndetailComponent } from './cvndetail.component';

describe('CvndetailComponent', () => {
  let component: CvndetailComponent;
  let fixture: ComponentFixture<CvndetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvndetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvndetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
