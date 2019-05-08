import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgMaterialModule } from '../ng-material.module';
import {FormsModule} from '@angular/forms';

import { TasksTableComponent } from './components/tasks-table/tasks-table.component';
import { TasksPageComponent } from './pages';

import { TasksRoutingModule } from './tasks-routing';
import { CreateTaskPageComponent } from './pages/create-task-page/create-task-page.component';

import { TasksService } from './services/tasks.service';
import { TaskPageComponent } from './pages/task-page/task-page.component';

@NgModule({
  declarations: [
    TasksPageComponent,
    TasksTableComponent,
    CreateTaskPageComponent,
    TaskPageComponent
  ],
  imports: [
    CommonModule,
    NgMaterialModule,
    TasksRoutingModule,
    FormsModule
  ],
  exports: [
    TasksPageComponent,
    TasksTableComponent,
    TasksRoutingModule
  ],
  providers: [
    TasksService
  ],
  bootstrap: []
})
export class TaskModule { }
