import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignDialogComponent } from './components/assign-dialog/assign-dialog.component';
import { NgMaterialModule } from '../ng-material.module';

@NgModule({
    declarations: [AssignDialogComponent],
    imports: [
        CommonModule,
        NgMaterialModule
    ],
    exports: [
        AssignDialogComponent
    ],
    entryComponents:[
        AssignDialogComponent
    ]
})
export class SharedModule { }
