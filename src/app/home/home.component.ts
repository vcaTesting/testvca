import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any = [];
  wholsalerList: any = [];
  balanceofWholsaler: any = [];
  balanceOfCustomer: any = [];
  paidBalnce: any
  wholsalername: any
  constructor(private httpService: FirebaseService) { }
  ngOnInit(): void {
    this.getCustomerName();
    this.getWholsalerDetail();
    this.getWholsalerBalance();
    this.getCustomerBalance()
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
      (res)=>{
        this.wholsalerList = res
      }
    )
  }
  getWholsalerBalance() {
    //   this.httpService.showwholsalerorder().subscribe(
    //     (res) => {
    //       const balance = JSON.stringify(res)
    //       this.balanceofWholsaler = JSON.parse(balance)
    //       if(this.balanceofWholsaler.name === this.wholsalerList.name){
    //         this.paidBalnce = this.balanceofWholsaler.balance
    //       }
    //     },err =>{
    // console.log(err)
    //     })
  }
  getCustomerBalance() {
    this.httpService.getCustomerPayment().subscribe(
      (res) => {
        this.balanceOfCustomer = res
      }
    )
  }
}
