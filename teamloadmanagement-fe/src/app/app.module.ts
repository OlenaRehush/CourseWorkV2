import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule, XHRBackend } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AccountModule } from './account/account.module';
import { CoreModule } from './core/core.module';
import { TaskModule } from './tasks/tasks.module';
import { UserModule } from './users/user.module';

import { AppComponent } from './app.component';

import { routing } from './app.routing';
import { AuthenticateXHRBackend } from './authenticate-xhr.backend';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeComponent } from './home/home.component';
import { NgMaterialModule } from './ng-material.module';
import { ConfigService } from './shared/utils/config.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NbThemeModule, NbCardModule } from '@nebular/theme';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    NbThemeModule.forRoot(),
    NbCardModule,
    NgMaterialModule,
    NgxSpinnerModule,
    HttpClientModule,
    routing,
    AccountModule,
    BrowserModule,
    FormsModule,
    CoreModule,
    HomeModule,
    TaskModule,
    UserModule,
    DashboardModule,
    HttpModule,
    BrowserAnimationsModule,
  ],
  providers: [ConfigService, {
    provide: XHRBackend,
    useClass: AuthenticateXHRBackend
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
