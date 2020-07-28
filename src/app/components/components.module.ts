import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementerComponent } from './incrementer/incrementer.component';
import { FormsModule } from '@angular/forms';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    IncrementerComponent,
    DoughnutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    IncrementerComponent,
    DoughnutComponent
  ]
})
export class ComponentsModule { }
