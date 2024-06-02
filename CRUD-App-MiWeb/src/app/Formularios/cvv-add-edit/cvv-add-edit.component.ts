import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../../core/core.service';
import { CvvService } from '../../services/cvv.service';

@Component({
  selector: 'app-cvv-add-edit',
  templateUrl: './cvv-add-edit.component.html',
  styleUrls: ['./cvv-add-edit.component.scss']
})
export class CvvAddEditComponent implements OnInit {
  cvvForm: FormGroup;
  
  constructor(
    private _fb: FormBuilder,
    private _cvvService: CvvService,
    private _dialogRef: MatDialogRef<CvvAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.cvvForm = this._fb.group({
      tarjeta: '',
      cvv101: '',
      cvv201: '',
      cvv999: '',
      cvv2: ''      
    });
  }

  ngOnInit(): void {
    this.cvvForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.cvvForm.valid) {
      if (this.data) {
        this._cvvService
          .updateCvv(this.data.id, this.cvvForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Detalle CVV Actualizada!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._cvvService.addCvv(this.cvvForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('CVV añadida correctamente');
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
