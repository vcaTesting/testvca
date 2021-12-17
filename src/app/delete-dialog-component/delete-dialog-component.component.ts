import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FirebaseService } from '../firebase.service';
@Component({
  selector: 'app-delete-dialog-component',
  templateUrl: './delete-dialog-component.component.html',
  styleUrls: ['./delete-dialog-component.component.scss']
})
export class DeleteDialogComponentComponent implements OnInit {
 
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpService:FirebaseService
  ) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  deleteLead(event: any, item: any): void {
    this.httpService.deleteCustomer(item);
    this.dialogRef.close();
  }
}
