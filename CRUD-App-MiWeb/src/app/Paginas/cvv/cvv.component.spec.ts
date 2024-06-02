import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvvComponent } from './cvv.component';

describe('CvvComponent', () => {
  let component: CvvComponent;
  let fixture: ComponentFixture<CvvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
