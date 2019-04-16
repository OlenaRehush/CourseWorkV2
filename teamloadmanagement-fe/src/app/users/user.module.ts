import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UsersRoutingModule } from './users-routing';
import { NgMaterialModule } from '../ng-material.module';
import { UsersTableComponent } from './components/users-table/users-table.component';

@NgModule({
  declarations: [UsersPageComponent, UsersTableComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NgMaterialModule
  ],
  exports: [
    UsersRoutingModule
  ]
})
export class UserModule { }
