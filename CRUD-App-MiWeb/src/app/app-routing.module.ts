import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinComponent } from './Paginas/pin/pin.component';
import { PinDetailComponent } from './Paginas/pin-detail/pin-detail.component';

import { CvvComponent } from './Paginas/cvv/cvv.component';
import { CvvdetailComponent } from './Paginas/cvvdetail/cvvdetail.component';
import { CavvComponent } from './Paginas/cavv/cavv.component';
import { CavvdetailComponent } from './Paginas/cavvdetail/cavvdetail.component';
import { CvnComponent } from './Paginas/cvn/cvn.component';
import { CvndetailComponent } from './Paginas/cvndetail/cvndetail.component';
import { HomeComponent } from './Paginas/home/home.component';
import {TarjetasComponent} from './Paginas/tarjetas/tarjetas.component';
import {MenRedsysComponent} from './Paginas/men-redsys/men-redsys.component';
//import { TarjAddEditComponent } from './Paginas/tarj-add-edit/tarj-add-edit.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', component: HomeComponent},
  { path:"tarjetas",component: TarjetasComponent},
  { path:"tarjetas/pin",component:PinComponent},
  { path:"tarjetas/pin/:pinid",component:PinDetailComponent},
  { path:"tarjetas/cvv",component:CvvComponent},
  { path:"tarjetas/cvv/:cvvid",component:CvvdetailComponent},
  { path:"tarjetas/cavv",component:CavvComponent},
  { path:"tarjetas/cavv/:cavvid",component:CavvdetailComponent},
  { path:"tarjetas/cvn",component:CvnComponent},
  { path:"tarjetas/cvn/:cvnid",component:CvndetailComponent},
  { path:"mRedsys",component: MenRedsysComponent},
  
  //{ path: "inicio", component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
