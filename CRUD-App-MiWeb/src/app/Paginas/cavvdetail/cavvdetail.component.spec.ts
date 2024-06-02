import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CavvdetailComponent } from './cavvdetail.component';

describe('CavvdetailComponent', () => {
  let component: CavvdetailComponent;
  let fixture: ComponentFixture<CavvdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CavvdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CavvdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
