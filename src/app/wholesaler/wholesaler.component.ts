import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonServiceService } from '../common-service.service';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-wholesaler',
  templateUrl: './wholesaler.component.html',
  styleUrls: ['./wholesaler.component.scss']
})
export class WholesalerComponent implements OnInit {
  saveWholesalerform: any;
  addwholesaler: any = []
  data: any = [];
  search: any;
  wholsaler: any
  WholsalerNameList: any = []
  myModel = {
    Weight: 0,
    rate: 0,
    Total: 0,
    paid: 0,
    balance: 0
  }
  totalBalanceList: any = [];
  tempArray: any = [];
  totalAmount: any;
  totalPaid: any;
  totalBalance: any
  constructor(private save: FirebaseService,
    private router: Router,
    private commonService: CommonServiceService
  ) {
    this.saveWholesalerform = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl(''),
      number: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.getWholsalerBalance()
    this.WholsalerName()
  }


  addWholesaler() {
    if (this.saveWholesalerform.valid) {
      this.save.savewholesaler(this.saveWholesalerform.value).then(
        (res) => {
          this.commonService.showFailureToast("Your Data sucessfully updated")
        }, (err) => {
          this.commonService.showFailureToast("Data not updated please try Again")
        }
      )
      this.saveWholesalerform.reset();
    } else {
      this.commonService.showFailureToast("please enter Name")
    }

  }

  WholsalerName() {
    this.save.getwholsaler().subscribe(
      (res) => {
        this.WholsalerNameList = res;
      })
  }

  gotoWholsalerOrder() {
    this.router.navigate(['/orderpagewholsaler'])
  }
  
  gotoWholsalerPayment() {
    this.router.navigate(['/paymentpageWholsaler'])
  }

  getWholsalerBalance() {
    this.save.getOrderofWholsaler().subscribe(
      (res) => {
        this.totalBalanceList = res
        this.tempArray = res
      })
      this.updateWholsalerBalance(0)
  }

  updateWholsalerBalance(name: any) {
    this.totalBalanceList = this.tempArray.filter((item: any) => {
      if (item.name == name) {
        return item
      }
    })
    this.total()
  }

  total() {
    let total = 0;
    let paid = 0;
    let balance = 0;
    for (let item of this.totalBalanceList) {
      total += item['total']
      paid += item['Paid']
      balance += item['Balance']
    }
      this.totalAmount = total
      this.totalPaid = paid
      this.totalBalance = balance 
  }
}

