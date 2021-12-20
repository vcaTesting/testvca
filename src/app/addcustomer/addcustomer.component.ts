import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DeleteDialogComponentComponent } from '../delete-dialog-component/delete-dialog-component.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
 public updateCustomerDetails:any
  selectedCustomerBalnce: any;
  selectedCustomerMobile: any;
  selectedCustomerAddress: any;
  custBalance: any;


  constructor(private httpSearce: FirebaseService,
    private router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,

  ) { }

  ngOnInit(): void {
    this.showcustomers();
    this.getCustomeTotalBalance()
    this.addcustomer = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phone: new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    })
    this.updateCustomerDetails = new FormGroup({
      name: new FormControl (''),
      number: new FormControl (''),
      address: new FormControl ('')
    })
  }
  submit() {
    if(this.addcustomer.valid) {
      this.httpSearce.addCustomer(this.addcustomer.value).then(
        (res) => {
          console.log(res);
          this.showCustomPosition()
        },
        (err) => {
          console.log(err);
        }
      )
      this.addcustomer.reset();
    }
    else{
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
        this.tempArray = res
      }
    )
  
  }
 
  showCustomPosition() {
    
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    });
  }
  delete(item:any){
    const dialogRef = this.dialog.open(DeleteDialogComponentComponent, {
      data: item,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        this.showcustomers();
        this.showNotification(
          'black',
          'Edit Record Successfully...!!!',
          'bottom',
          'center'
        );
      }
    });
  }
  
  showNotification(colorName:any,text:any, placementFrom:any, placementAlign:any) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
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
    this.balance = totalBalance
  }
  customerTotal(name:any){
    this.totalBalanceList = this.tempArray.filter((item:any)=>{
      if(item.name == name){
        return item
      }
      })
      this.cal()
  } 
  editCustomer(item:any){
    this.updateCustomerDetails.get('name').setValue(item.name)
    this.updateCustomerDetails.get('address').setValue(item.address)
    this.updateCustomerDetails.get('number').setValue(item.phone)
  }

  viewCustomerDetails(item:any){
    console.log(item)
    this.selectedCustomerBalnce =  item.name
    this.selectedCustomerMobile = item.phone
    this.selectedCustomerAddress = item.address
    this.custBalance = this.balance
    this.totalBalanceList = this.tempArray.filter((item: any) => {
      if (item.name == this.selectedCustomerBalnce) {
        return item
      }
    })
  }
}
