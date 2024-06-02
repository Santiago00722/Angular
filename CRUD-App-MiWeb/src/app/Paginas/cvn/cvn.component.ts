import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CvnAddEditComponent } from '../../Formularios/cvn-add-edit/cvn-add-edit.component';
import { CvnService } from '../../services/cvn.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from '../../core/core.service';

@Component({
  selector: 'app-cvn',
  templateUrl: './cvn.component.html',
  styleUrls: ['./cvn.component.scss']
})
export class CvnComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'tarjeta',
    'cvn10',
    'cvn17',
    'cvn18',    
    'action',
  ];

  varpadre: number=0;
  ocultar: boolean=false;
  
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _cvnService: CvnService,
    private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.getCvnList();
  }

  openAddEditCvnForm() {
    const dialogRef = this._dialog.open(CvnAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCvnList();
        }
      },
    });
  }

  getCvnList() {
    this._cvnService.getCvnList().subscribe({
      next: (res) => { 
        this.dataSource = new MatTableDataSource(res);
        console.log(this.dataSource);
        this.dataSource.sort = this.sort;
        console.log(this.dataSource.sort);
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  getCvn(id: number) {
    this._cvnService.getCvn(id).subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        //this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteCvn(id: number) {
    this._cvnService.deleteCvn(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Cvn Borrado!', 'Hecho');
        this.getCvnList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(CvnAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCvnList();
        }
      },
    });
  }

  GetCvnID(data: any) {
    //console.log(data);
    this.ocultar=true;
    this.varpadre=data;
    this.getCvn(this.varpadre);          
  }
}
