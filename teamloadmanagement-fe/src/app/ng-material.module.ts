import { NgModule } from '@angular/core';
import {
  MatPaginatorModule, MatSidenavModule, MatTableModule, MatButtonModule, MatCheckboxModule,
  MatInputModule, MatToolbarModule, MatMenuModule, MatIconModule, MatListModule, MatCardModule,
  MatSelectModule, MatDialogModule, MatChipsModule, MatAutocompleteModule, MatTreeModule, MatProgressSpinnerModule,
  MatProgressBarModule, MatGridListModule, MatRadioModule, MatStepperModule, MatTooltipModule, MatFormFieldModule,
  MatRippleModule, MatSnackBarModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    MatPaginatorModule, MatSidenavModule, MatTableModule, MatButtonModule, MatCheckboxModule, LayoutModule,
    MatInputModule, MatToolbarModule, MatMenuModule, MatIconModule, MatListModule, MatCardModule,
    MatSelectModule, MatDialogModule, MatChipsModule, MatAutocompleteModule, MatTreeModule, MatProgressSpinnerModule,
    MatProgressBarModule, MatGridListModule, MatRadioModule, MatStepperModule, MatTabsModule, MatTooltipModule,
    MatFormFieldModule, MatRippleModule, MatSnackBarModule],
  exports: [MatPaginatorModule, MatSidenavModule, MatTableModule, MatButtonModule,
    MatCheckboxModule, MatInputModule, MatToolbarModule, MatMenuModule, MatIconModule,
    MatListModule, MatCardModule, MatSelectModule, MatDialogModule, MatChipsModule, MatAutocompleteModule, LayoutModule,
    MatTreeModule, MatProgressSpinnerModule, MatProgressBarModule, MatGridListModule, MatRadioModule,
    MatDatepickerModule, MatStepperModule, MatTabsModule, MatTooltipModule, MatFormFieldModule, MatRippleModule, MatSnackBarModule]
})
export class NgMaterialModule { }
