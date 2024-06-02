import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../../core/core.service';
import { TarjetaService } from '../../services/tarjeta.service';
//import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './tarj-add-edit.component.html',
  styleUrls: ['./tarj-add-edit.component.scss'],  
})
export class TarjAddEditComponent implements OnInit {
  tarjForm: FormGroup;
  //checked = false;

  /*education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];*/

  constructor(
    private _fb: FormBuilder,
    private _tarjService: TarjetaService,
    private _dialogRef: MatDialogRef<TarjAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.tarjForm = this._fb.group({
      tarjeta: '',
      fechcad: '',
      pista2: '',
      booleanpin: '',
      booleancvv: '',
      booleancavv: '',
      booleancvn: ''      
    });
  }

  ngOnInit(): void {
    this.tarjForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.tarjForm.valid) {
      if (this.data) {
        this._tarjService
          .updateTarjeta(this.data.id, this.tarjForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Detalle Tarjeta Actualizada!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._tarjService.addTarjeta(this.tarjForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Tarjeta añadida correctamente');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}
