import { Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PinAddEditComponent } from '../../Formularios/pin-add-edit/pin-add-edit.component';
import { PinService } from '../../services/pin.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from '../../core/core.service';

@Component({
  selector: 'app-pin-detail',
  templateUrl: './pin-detail.component.html',
  styleUrls: ['./pin-detail.component.scss']
})
export class PinDetailComponent implements OnInit{
  displayedColumns: string[] = [
    'id',
    'tarjeta',
    'pin',
    'offset',
    'pvv',
    'action',
  ];

  pinid: number = 0;

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  //constructor(private route: ActivatedRoute) {    
  //}
  constructor(
    private _dialog: MatDialog,
    private _pinService: PinService,
    private _coreService: CoreService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.pinid = params['pinid']
    });
    this.getPin(this.pinid);
  }
  
  openAddEditPinForm() {
    const dialogRef = this._dialog.open(PinAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getPinList();
        }
      },
    });
  }

  getPinList() {
    this._pinService.getPinList().subscribe({
      next: (res) => {  
        console.log(res)       
        this.dataSource = new MatTableDataSource(res);        
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  getPin(id: number) {
    this._pinService.getPin(id).subscribe({
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

  deletePin(id: number) {
    this._pinService.deletePin(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Pin Borrado!', 'Hecho');
        this.getPinList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(PinAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getPinList();
        }
      },
    });
  }
}
