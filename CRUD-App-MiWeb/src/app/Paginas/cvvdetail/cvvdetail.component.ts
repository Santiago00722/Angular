import { Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CvvAddEditComponent } from '../../Formularios/cvv-add-edit/cvv-add-edit.component';
import { CvvService } from '../../services/cvv.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from '../../core/core.service';

@Component({
  selector: 'app-cvvdetail',
  templateUrl: './cvvdetail.component.html',
  styleUrls: ['./cvvdetail.component.scss']
})
export class CvvdetailComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'tarjeta',
    'cvv101',
    'cvv201',
    'cvv999',
    'cvv2',
    'action',
  ];

  cvvid: number = 0;

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _cvvService: CvvService,
    private _coreService: CoreService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.cvvid = params['cvvid']
    });
    this.getCvv(this.cvvid);
  }

  openAddEditCvvForm() {
    const dialogRef = this._dialog.open(CvvAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCvvList();
        }
      },
    });
  }

  getCvvList() {
    this._cvvService.getCvvList().subscribe({
      next: (res) => { 
        this.dataSource = new MatTableDataSource(res);
        //console.log(this.dataSource);
        this.dataSource.sort = this.sort;
        //console.log(this.dataSource.sort);
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  getCvv(id: number) {
    this._cvvService.getCvv(id).subscribe({
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

  deleteCvv(id: number) {
    this._cvvService.deleteCvv(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Cvv Borrado!', 'Hecho');
        this.getCvvList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(CvvAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCvvList();
        }
      },
    });
  }
}
