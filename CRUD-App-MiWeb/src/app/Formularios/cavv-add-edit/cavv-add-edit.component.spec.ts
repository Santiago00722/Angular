import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CavvAddEditComponent } from './cavv-add-edit.component';

describe('CavvAddEditComponent', () => {
  let component: CavvAddEditComponent;
  let fixture: ComponentFixture<CavvAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CavvAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CavvAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
