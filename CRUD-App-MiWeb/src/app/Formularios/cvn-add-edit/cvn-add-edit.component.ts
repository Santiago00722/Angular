import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../../core/core.service';
import { CvnService } from '../../services/cvn.service';


@Component({
  selector: 'app-cnv-add-edit',
  templateUrl: './cvn-add-edit.component.html',
  styleUrls: ['./cvn-add-edit.component.scss']
})
export class CvnAddEditComponent implements OnInit {
  cvnForm: FormGroup;
  
  constructor(
    private _fb: FormBuilder,
    private _cvnService: CvnService,
    private _dialogRef: MatDialogRef<CvnAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.cvnForm = this._fb.group({
      tarjeta: '',
      cvn10: '',      
      cvn17: '',           
      cvn18: ''
    });
  }

  ngOnInit(): void {
    this.cvnForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.cvnForm.valid) {
      if (this.data) {
        this._cvnService
          .updateCvn(this.data.id, this.cvnForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Detalle CVN Actualizada!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._cvnService.addCvn(this.cvnForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('CVN añadida correctamente');
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
