import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../firebase.service';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss']
})
export class AddcustomerComponent implements OnInit {
  public addcustomer: any;
  customers: any = [];
  search:any;
  data: any = [];
  editForm:any;
  totalBalanceList:any = [];
  tempArray:any = [];
  balance:any;
  paid:any;
  total:any
  constructor(private httpSearce: FirebaseService,
    private router: Router
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
    }
    this.balance = totalBalance
    this.paid = totalpaid
    this.total= total
  }
  customerTotal(name:any){
    this.totalBalanceList=this.tempArray.filter((item:any)=>{
      if(item.name == name){
        return item
      }
      })
      this.cal()
  }
}
