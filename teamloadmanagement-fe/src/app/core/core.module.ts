import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgMaterialModule } from '../ng-material.module';

import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgMaterialModule
        
    ],
    declarations: [
        HeaderComponent,
        SidenavComponent
    ],
    exports: [
        HeaderComponent,
        SidenavComponent
    ],
    providers: []
})
export class CoreModule { }
