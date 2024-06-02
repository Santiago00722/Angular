import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarjAddEditComponent } from './tarj-add-edit.component';

describe('EmpAddEditComponent', () => {
  let component: TarjAddEditComponent;
  let fixture: ComponentFixture<TarjAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
