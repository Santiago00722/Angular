import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TarjAddEditComponent } from '../../Formularios/tarj-add-edit/tarj-add-edit.component';
import { TarjetaService } from '../../services/tarjeta.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from '../../core/core.service';
//import { get } from "../../utils/htppClient";


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent {
  displayedColumns: string[] = [
    'id',
    'tarjeta',
    'fechcad',
    'pista2',
    'booleanpin',
    'booleancvv',
    'booleancavv',
    'booleancvn',
    'action',
  ];
  
  varpadre: number=0;
  ocultar: boolean=false;

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _tarjService: TarjetaService,
    private _coreService: CoreService           
  ) { }

   ngOnInit(): void {
    //this.varpadre=1;
    //this.name ='Carol';
    this.getTarjetaList();    
  }

  openAddEditTarjForm() {
    const dialogRef = this._dialog.open(TarjAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getTarjetaList();
        }
      },
    });
  }

  getTarjetaList() {
    this._tarjService.getTarjetaList().subscribe({
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

  getTarjeta(id:number) {
    this._tarjService.getTarjeta(id).subscribe({
      next: (res) => {
        //console.log(res);         
        this.dataSource = new MatTableDataSource(res);
        //console.log(this.dataSource);
        this.dataSource.sort = this.sort;
        //console.log(this.dataSource.sort);
        this.dataSource.paginator = this.paginator;
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

  deleteTarjeta(id: number) {
    this._tarjService.deleteTarjeta(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Tarjeta Borrada!', 'Hecho');
        this.getTarjetaList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(TarjAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getTarjetaList();
        }
      },
    });
  }

  GetTarjetaID(data: any) {
    //console.log(data);
    this.ocultar=true;
    this.varpadre=data;
    this.getTarjeta(this.varpadre);          
  }
}
