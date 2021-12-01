import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  paidBalnce: any;
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
  totalWholsalerBalance: any = [];
  constructor(private httpService: FirebaseService) { }
  ngOnInit(): void {
    this.getCustomerName();
    this.getWholsalerDetail();
    this.getWholsalerBalance();
    this.getCustomerBalance();
    this.getCustomeTotalBalance();
    this.getWholsalerBalance();
    this.wholsalerTotal('0','1')
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
      }
    )
    this.total()
  }
  getCustomerBalance() {
    this.httpService.getCustomerPayment().subscribe(
      (res) => {
        this.balanceOfCustomer = res
      }
    )
  }
  deleteLead(event: any, item: any) {
    var result = confirm("Do you want Delete")
    if (result == true) {
      this.httpService.deleteCustomer(item);
    }
  }
  deleteWholsaler(event: any, item: any) {
    var result = confirm("Do you want Delete")
    if (result == true) {
      this.httpService.deleteWholsaler(item);
    }
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
    this.totalBalanceList = this.tempArray.filter((item: any) => {
      if (item.name == name) {
        return item
      }
    })
    this.cal()
  }
  wholsalerTotal(name: any,i:any) {
    this.totalWholsalerBalance = this.tempData.filter((item: any) => {
      if (item.name == name) {
        return this.totalWholsalerBalance[i].balance=this.wholsalerBalance
      }
    })
    this.total()
  }
  patchvalueofCustomer(customer:any){
    console.log(customer)
    this.updateCustomerDetailForm.get('name').setValue(customer.name)
    this.updateCustomerDetailForm.get('address').setValue(customer.address)
    this.updateCustomerDetailForm.get('number').setValue(customer.phone)

  }
}
