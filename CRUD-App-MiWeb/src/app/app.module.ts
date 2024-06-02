import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TarjAddEditComponent } from './Formularios/tarj-add-edit/tarj-add-edit.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PinComponent } from './Paginas/pin/pin.component';
import { CvvComponent } from './Paginas/cvv/cvv.component';
import { CavvComponent } from './Paginas/cavv/cavv.component';
import { CvnComponent } from './Paginas/cvn/cvn.component';
import { HomeComponent } from './Paginas/home/home.component';
import { PinAddEditComponent } from './Formularios/pin-add-edit/pin-add-edit.component';
import { CvvAddEditComponent } from './Formularios/cvv-add-edit/cvv-add-edit.component';
import { CavvAddEditComponent } from './Formularios/cavv-add-edit/cavv-add-edit.component';
import { CvnAddEditComponent } from './Formularios/cvn-add-edit/cvn-add-edit.component';
import { PadreComponent } from './Paginas/padre/padre.component';
import { HijoComponent } from './Paginas/hijo/hijo.component';
//import { SidenavComponent } from './Paginas/sidenav/sidenav.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TarjetasComponent } from './Paginas/tarjetas/tarjetas.component';
import { PinDetailComponent } from './Paginas/pin-detail/pin-detail.component';
import { CvvdetailComponent } from './Paginas/cvvdetail/cvvdetail.component';
import { CavvdetailComponent } from './Paginas/cavvdetail/cavvdetail.component';
import { CvndetailComponent } from './Paginas/cvndetail/cvndetail.component';
import { MenRedsysComponent } from './Paginas/men-redsys/men-redsys.component';


@NgModule({
  declarations: [
    AppComponent,
    TarjAddEditComponent,
    PinComponent,
    CvvComponent,
    CavvComponent,
    CvnComponent,
    HomeComponent,
    PinAddEditComponent,
    CvvAddEditComponent,
    CavvAddEditComponent,
    CvnAddEditComponent,
    PadreComponent,
    HijoComponent,    
    TarjetasComponent, PinDetailComponent, CvvdetailComponent, CavvdetailComponent, CvndetailComponent, MenRedsysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatListModule,
    MatSidenavModule    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
