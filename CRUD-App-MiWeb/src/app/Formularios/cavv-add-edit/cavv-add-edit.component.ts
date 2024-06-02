import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../../core/core.service';
import { CavvService } from '../../services/cavv.service';

@Component({
  selector: 'app-cavv-add-edit',
  templateUrl: './cavv-add-edit.component.html',
  styleUrls: ['./cavv-add-edit.component.scss']
})
export class CavvAddEditComponent implements OnInit {
  cavvForm: FormGroup;
  
  constructor(
    private _fb: FormBuilder,
    private _cavvService: CavvService,
    private _dialogRef: MatDialogRef<CavvAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.cavvForm = this._fb.group({
      tarjeta: '',
      cavv: '',      
      cavv7: ''      
    });
  }

  ngOnInit(): void {
    this.cavvForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.cavvForm.valid) {
      if (this.data) {
        this._cavvService
          .updateCavv(this.data.id, this.cavvForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Detalle CAVV Actualizada!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._cavvService.addCavv(this.cavvForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('CAVV añadida correctamente');
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
