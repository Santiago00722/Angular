import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CavvAddEditComponent } from '../../Formularios/cavv-add-edit/cavv-add-edit.component';
import { CavvService } from '../../services/cavv.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from '../../core/core.service';

@Component({
  selector: 'app-cavv',
  templateUrl: './cavv.component.html',
  styleUrls: ['./cavv.component.scss']
})
export class CavvComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'tarjeta',
    'cavv',
    'cavv7',    
    'action',
  ];

  varpadre: number=0;
  ocultar: boolean=false;
  
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _cavvService: CavvService,
    private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.getCavvList();
  }

  openAddEditCavvForm() {
    const dialogRef = this._dialog.open(CavvAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCavvList();
        }
      },
    });
  }

  getCavvList() {
    this._cavvService.getCavvList().subscribe({
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

  getCavv(id: number) {
    this._cavvService.getCavv(id).subscribe({
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

  deleteCavv(id: number) {
    this._cavvService.deleteCavv(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Cavv Borrado!', 'Hecho');
        this.getCavvList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(CavvAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCavvList();
        }
      },
    });
  }

  GetCavvID(data: any) {
    //console.log(data);
    this.ocultar=true;
    this.varpadre=data;
    this.getCavv(this.varpadre);          
  }
}
