import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../auth.guard';
import { SharedModule } from '../shared/modules/shared.module';
import { routing } from './dashboard.routing';
import { HomeComponent } from './home/home.component';
import { RootComponent } from './root/root.component';
import { DashboardService } from './services/dashboard.service';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    SharedModule
  ],
  declarations: [RootComponent, HomeComponent, SettingsComponent],
  exports: [],
  providers: [AuthGuard, DashboardService]
})
export class DashboardModule { }
