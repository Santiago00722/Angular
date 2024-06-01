import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from './pipes/cadenas.pipes';
import { PIPES_NUMERICOS } from './pipes/numericos.pipes';

@NgModule({
    declarations: [ PIPES_CADENAS, PIPES_NUMERICOS, ],
    exports: [ PIPES_CADENAS, PIPES_NUMERICOS, ],
    imports: [
      CommonModule
    ]
  })
  export class MyCoreModule { }