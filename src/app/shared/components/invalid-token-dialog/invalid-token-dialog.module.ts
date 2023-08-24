import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { InvalidTokenDialogComponent } from './invalid-token-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRightSheetModule } from 'mat-right-sheet';

const materialModules = [
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatRightSheetModule
];

@NgModule({
  declarations: [
    InvalidTokenDialogComponent
  ],
  exports: [
    InvalidTokenDialogComponent,
  ],
  imports: [
    CommonModule,
    ...materialModules
  ]
})
export class InvalidTokenDialogModule { }
