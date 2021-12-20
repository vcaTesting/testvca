import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DeleteDialogComponentComponent } from '../delete-dialog-component/delete-dialog-component.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonServiceService } from '../common-service.service';
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss']
})
export class AddcustomerComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Mobile No', 'Address'];
  public addcustomer: any;
  customers: any = [];
  search:any;
  data: any = [];
  editForm:any;
  totalBalanceList:any = [];
  tempArray:any = [];
  balance:any;
  paid:any;
  total:any;
 color:any;

  constructor(private httpSearce: FirebaseService,
    private router: Router,
    public dialog: MatDialog,
    private commonService:CommonServiceService
    ) { }

  ngOnInit(): void {
    this.showcustomers();
    this.getCustomeTotalBalance()
    this.addcustomer = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phone: new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    })
  }

  submit() {
    if(this.addcustomer.valid) {
      this.httpSearce.addCustomer(this.addcustomer.value).then(
        (res) => {
          console.log(res);
            this.commonService.showSuccessToast("your Data successfully Uploaded")
          },
        (err) => {
          this.commonService.showSuccessToast("your Data Not Uploaded please try again")
        }
      )
           this.addcustomer.reset();
    }
    else{
      this.commonService.showFailureToast("please enter Name")
    }
  }

  showcustomers() {
    this.httpSearce.getCustomer().subscribe((res) => {
      this.data = res;
    })
  }

  gotoCustomerPayment() {
    this.router.navigate(['/paymentpagecustomer'])
  }

  gotoCustomerOrder() {
    this.router.navigate(['/orderpagecustomer'])
  }

  getCustomeTotalBalance() {
    this.httpSearce.showCustomerOrder().subscribe(
      (res) => {
        this.totalBalanceList = res;
        console.log(this.totalBalanceList)
        this.tempArray = res
      })
  }
 
 delete(item:any){
    const dialogRef = this.dialog.open(DeleteDialogComponentComponent, {
      data: item,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        this.showcustomers();
      }
    });
  }



  customerTotal(name:any){
    this.totalBalanceList = this.tempArray.filter((item:any)=>{
      if(item.name == name){
        return item
      }
      })
      this.cal()
  } 

  cal() {
    let totalBalance = 0;
    let totalpaid = 0;
    let total = 0;
    for (let item of this.totalBalanceList) {
      totalBalance += item['Balance14'];
      totalpaid += item['paid14']
      total += item['total14']
      this.balance = totalBalance
    this.paid = totalpaid
    this.total= total
    }
  }
}
