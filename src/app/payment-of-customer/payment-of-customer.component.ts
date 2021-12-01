import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-payment-of-customer',
  templateUrl: './payment-of-customer.component.html',
  styleUrls: ['./payment-of-customer.component.scss']
})
export class PaymentOfCustomerComponent implements OnInit {
  searchbyName: any;
  searchByDate: any;
  showDatatable:boolean = false;
  CustomerList:any=[]
  constructor(private http: FirebaseService) { }
  customerPaymentList: any = [];
  ngOnInit(): void {
    this.getCustomerPayment()
    this.getCustomerName()
  }
  getCustomerPayment() {
    this.http.getCustomerPayment().subscribe(
      (res) => {
        this.customerPaymentList = res
      }
    )

  }
  getCustomerName(){
    this.http.getCustomer().subscribe(
      (res)=>{
        this.CustomerList = res
      }
    )
  }
  search(){
   this.showDatatable = true
  }
  showallPayment(){
    this.searchbyName = '';
    this.searchByDate = '';
    this.showDatatable = true

  }
}
