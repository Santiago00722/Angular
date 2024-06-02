import { Component, Input, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PinAddEditComponent } from '../../Formularios/pin-add-edit/pin-add-edit.component';
import { PinService } from '../../services/pin.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from '../../core/core.service';


@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'tarjeta',
    'pin',
    'offset',
    'pvv',
    'action',
  ];

  varpadre: number=0;
  ocultar: boolean=false;
   
  //@Input() varhijo: number = 0;
  //varId: number = 0;
  //varpadre: number=0;

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _pinService: PinService,
    private _coreService: CoreService,
    //private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPinList();
    //this.varpadre=data;
    //this.getPin(this.varhijo);
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

  GetPinID(data: any) {
    //console.log(data);
    this.ocultar=true;
    this.varpadre=data;
    this.getPin(this.varpadre);          
  }
}
