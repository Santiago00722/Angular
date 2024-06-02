import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvnComponent } from './cvn.component';

describe('CvnComponent', () => {
  let component: CvnComponent;
  let fixture: ComponentFixture<CvnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
