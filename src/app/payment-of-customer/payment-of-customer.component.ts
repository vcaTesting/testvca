import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-payment-of-customer',
  templateUrl: './payment-of-customer.component.html',
  styleUrls: ['./payment-of-customer.component.scss']
})
export class PaymentOfCustomerComponent implements OnInit {

  constructor(private http:FirebaseService) { }
  customerPaymentList:any=[];
  ngOnInit(): void {
    this.getCustomerPayment()
  }
  getCustomerPayment(){
    this.http.getCustomerPayment().subscribe(
      (res)=>{
        this.customerPaymentList = res
  }
    )

  }
}
