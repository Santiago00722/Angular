import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenRedsysComponent } from './men-redsys.component';

describe('MenRedsysComponent', () => {
  let component: MenRedsysComponent;
  let fixture: ComponentFixture<MenRedsysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenRedsysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenRedsysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
