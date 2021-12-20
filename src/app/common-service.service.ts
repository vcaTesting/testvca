import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private snackBar: MatSnackBar,) { }

  showSuccessToast(text:any) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: 'snackbar-success'
    });
  }
  /*Common successs toaster function end */

  /*Common failure toaster function start */
  showFailureToast(text:any) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: 'snackbar-danger'
    });
  }
  /*Common failure toaster function end */


  /*Common warning toaster function start */
  showWarningToast(text:any) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: 'snackbar-warning'
    });
  }
}
