import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignDialogComponent } from './components/assign-dialog/assign-dialog.component';
import { NgMaterialModule } from '../ng-material.module';
import { LogTimeComponent } from './components/log-time/log-time.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AssignDialogComponent, LogTimeComponent],
    imports: [
        CommonModule,
        NgMaterialModule,
        FormsModule
    ],
    exports: [
        AssignDialogComponent,
        LogTimeComponent
    ],
    entryComponents:[
        AssignDialogComponent,
        LogTimeComponent
    ]
})
export class SharedModule { }
