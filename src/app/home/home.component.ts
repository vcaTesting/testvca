import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../firebase.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { DeleteDialogComponentComponent } from '../delete-dialog-component/delete-dialog-component.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any = [];

  wholsalerList: any = [];
  // paidBalnce: any;
  wholsalername: any;
  balance: any;
  wholsalerBalance: any;
  searchCustomerName: any;
  searchWholsalerName: any;
  updateCustomerDetailForm: any;
  updatewholsalerDetailForm: any;
  totalBalanceList: any = [];
  tempData: any = [];
  tempArray: any = [];
  totalBalance:any;
  selectedWholsalerName:any
  totalWholsalerBalance: any = [];
  selectedCustomerBalnce: any;
  deletedWholsaler: any;
  currentDate:any;
  todaysDate:any;
  todaysPayment:any=[];
  temp:any=[];
  collection:any
  constructor(private httpService: FirebaseService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private datePipe:DatePipe
    ) { }
  ngOnInit(): void {
    this.getCustomerName();
    this.getWholsalerDetail();
    this.getWholsalerBalance();
    this.getCustomeTotalBalance();
    this.cal()
    this.getTodaysPayment()
    this.updateCustomerDetailForm = new FormGroup({
      name: new FormControl('', Validators.required),
      number: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      address: new FormControl('', Validators.required),
    })
    this.updatewholsalerDetailForm = new FormGroup({
      name: new FormControl('', Validators.required),
      number: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      address: new FormControl('', Validators.required),
    })
    this.currentDate = new Date()
    this.todaysDate = this.datePipe.transform(this.currentDate, 'yyyy-MM-dd')
  }
  getCustomerName() {
    this.httpService.getCustomer().subscribe(
      (res) => {
        this.data = res;
      }
    )
  }
  getWholsalerDetail() {
    this.httpService.getwholsaler().subscribe(
      (res) => {
        this.wholsalerList = res
      }
    )
    
  }
  getWholsalerBalance() {
    this.httpService.getOrderofWholsaler().subscribe(
      (res) => {
        this.totalWholsalerBalance = res
        this.tempData = res
      }
    )
    this.total()
  }
 
  deleteLead(event: any, item: any) {
  const dialogRef = this.dialog.open(DeleteDialogComponentComponent, {
    data: item,
  });
  dialogRef.afterClosed().subscribe((result) => {
    if (result === 1) {
      this.getCustomerName();
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
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: 'snackbar-danger'
    });
  }
  deleteWholsaler(event: any, item: any) {
      this.httpService.deleteWholsaler(item);   
       this.showNotification(
      'snackbar-danger',
      'Delete Record Successfully...!!!',
      'bottom',
      'center'
    );
    }
  

  getCustomeTotalBalance() {
    this.httpService.showCustomerOrder().subscribe(
      (res) => {
        this.totalBalanceList = res;
        this.tempArray = res
      }
    )
    this.cal()
  }

  patchValueWholsaler(wholsaler: any) {
    this.updatewholsalerDetailForm.get('name').setValue(wholsaler.name)
    this.updatewholsalerDetailForm.get('address').setValue(wholsaler.address)
    this.updatewholsalerDetailForm.get('number').setValue(wholsaler.number)

  }
  cal() {
    let totalBalance = 0;
    for (let item of this.totalBalanceList) {
      totalBalance += item['Balance14'];
    }
    this.balance = totalBalance 
  }

  total() {
    let balance = 0;
    for (let item of this.totalWholsalerBalance) {
      balance += item['Balance']
    }
    this.wholsalerBalance = balance   
  }

  customerTotal(name: any, index: any) {   
      this.selectedCustomerBalnce =  name
      this.totalBalanceList = this.tempArray.filter((item: any) => {
        if (item.name == this.selectedCustomerBalnce) {
          return item
        }
      })
      this.cal()     
  }
  wholsalerTotal(name: any) {
    this.selectedWholsalerName = name
    this.totalWholsalerBalance = this.tempData.filter((item: any) => {
      if (item.name == this.selectedWholsalerName) {
        return item
      }
    })
    this.total()
  }

  patchvalueofCustomer(customer:any){
    this.updateCustomerDetailForm.get('name').setValue(customer.name)
    this.updateCustomerDetailForm.get('address').setValue(customer.address)
    this.updateCustomerDetailForm.get('number').setValue(customer.phone)

  }
  wantToDeleteWholsaler(wholsaler:any){
     this.deletedWholsaler = wholsaler
  }

  getTodaysPayment(){
    this.httpService.getCustomerPayment().subscribe(
      (res)=>{
        this.todaysPayment = res
        this.temp = res
        this.todaysPayment = this.temp.filter((item: any) => {
          if (item.date == this.todaysDate) {
            return item
          }
        }) 
        console.log(this.todaysPayment)
        console.log(res)
      }
    )
    this.calculatePayment()
  }
  calculatePayment(){
    let balance = 0;
    for (let item of this.totalWholsalerBalance) {
      balance += item['cash']
    }
    this.collection = balance   
  }
  
}
