import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgMaterialModule } from '../ng-material.module';
import {FormsModule} from '@angular/forms';

import { TasksStatisticComponent } from './components/tasks-statistic/tasks-statistic.component';

@NgModule({
  declarations: [
      TasksStatisticComponent
  ],
  imports: [
    CommonModule,
    NgMaterialModule,    
    FormsModule
  ],
  exports: [
      TasksStatisticComponent
  ],
  providers: [
  ],
  bootstrap: []
})
export class HomeModule { }
