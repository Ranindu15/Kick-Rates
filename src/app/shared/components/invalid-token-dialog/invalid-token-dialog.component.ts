import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RouteManager } from '../../../core/utils/framework/route-manager.service';
import { CONST } from '../../../core/utils/constant';
import { MatRightSheet } from 'mat-right-sheet';

@Component({
  selector: 'mp-invalid-token-dialog',
  templateUrl: './invalid-token-dialog.component.html',
  styleUrls: ['./invalid-token-dialog.component.scss']
})
export class InvalidTokenDialogComponent implements OnInit {

  constructor(
    private matRightSheet: MatRightSheet,
    public dialogRef: MatDialogRef<InvalidTokenDialogComponent>,
    private routerManager: RouteManager,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  /**
   * login button click event
   */
  public onLogin() {
    this.dialog.closeAll();
    if (this.matRightSheet._openedRightSheetRef) {
      this.matRightSheet.dismiss();
    }
    this.routerManager.navigate('LOGIN', '', null, [CONST.QUERY_PARAMS.PAGE, CONST.QUERY_PARAMS.JOURNEY]);
  }

}
