import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CavvComponent } from './cavv.component';

describe('CavvComponent', () => {
  let component: CavvComponent;
  let fixture: ComponentFixture<CavvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CavvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CavvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
