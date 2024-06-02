import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../../core/core.service';
import { PinService } from '../../services/pin.service';

@Component({
  selector: 'app-pin-add-edit',
  templateUrl: './pin-add-edit.component.html',
  styleUrls: ['./pin-add-edit.component.scss']
})
export class PinAddEditComponent implements OnInit {
  pinForm: FormGroup;
  
  constructor(
    private _fb: FormBuilder,
    private _pinService: PinService,
    private _dialogRef: MatDialogRef<PinAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.pinForm = this._fb.group({
      tarjeta: '',
      pin: '',      
      offset: '',           
      pvv: ''
    });
  }

  ngOnInit(): void {
    this.pinForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.pinForm.valid) {
      if (this.data) {
        this._pinService
          .updatePin(this.data.id, this.pinForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Detalle PIN Actualizada!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._pinService.addPin(this.pinForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('PIN añadida correctamente');
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
