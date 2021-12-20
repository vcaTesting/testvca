import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-wholsalerorder',
  templateUrl: './wholsalerorder.component.html',
  styleUrls: ['./wholsalerorder.component.scss']
})
export class WholsalerorderComponent implements OnInit {
  wholsalerform: any;
  data: any = [];
  productNameList:any= [
    {name:'Select Product'},{name:'Wing'},{name:'Leg Boneless'},{name:'Boiler'},{name:'Coldress'},{name:'Tanduri'},
    {name:'Cury Cut'},{name:'Cut peace'},{name:'Leaver'},{name:'Skin'},{name:'Spcl Leg'},{name:'Live bird'},{name:'Egg'},{name:'Gavran'}

  ];
  WholsalerNameList: any = [];
  myModel = {
    Weight: 0,
    rate: 0,
    Total: 0,
    paid: 0,
    balance: 0
  }
  currenDate:any
  image: any
  selectedwholsaler:any;
  orderDate:any
  totalBalanceList:any = []
  tempArray:any = [];
  totalAmount:any
  constructor(private http: FirebaseService

  ) { }

  ngOnInit(): void {
    this.wholsalerform = new FormGroup({
      date: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      pname: new FormControl(''),
      Quantity: new FormControl(''),
      Weight: new FormControl(''),
      Rate: new FormControl(''),
      total: new FormControl(''),
      Paid: new FormControl(''),
      Balance: new FormControl(''),
      file: new FormControl('')
    })
    this.WholsalerName()
    this.getWholsalerBalance
    this.cal()
    this.currenDate = new Date()
  }
  submit() {
    if (this.wholsalerform.valid) {
      console.log(this.wholsalerform.value)

      this.http.setWholesaler(this.wholsalerform.value).then(
        (res) => {
          console.log(res)
          alert("Data save Successfully")
        }
      )
      this.wholsalerform.reset()
    } else {
      alert("Please Select Date")
      console.log(this.wholsalerform.value)
    }
  }

  calculate() {

    this.myModel.Total = this.myModel.Weight * 1 * this.myModel.rate * 1
    this.myModel.balance = this.myModel.Total * 1 - this.myModel.paid * 1
  }
  WholsalerName() {
    this.http.getwholsaler().subscribe(
      (res)=>{
        this.WholsalerNameList = res
      }
    )
  }
  selectedWholsaler(data:any){
    this.selectedwholsaler = data.value
    this.wholsalerform.get('name').setValue(this.selectedwholsaler.name)
    console.log(this.selectedwholsaler)
    this.cal()
  }

  getWholsalerBalance() {
    this.http.getOrderofWholsaler().subscribe(
      (res) => {
        this.totalBalanceList = res
        this.tempArray = res
      })
  }

  cal() {
    let totalBalance = 0;
    for (let item of this.totalBalanceList) {
      if (item.name == this.selectedwholsaler.name) {
      totalBalance += item['Balance'];
    }
  }
    this.totalAmount = totalBalance
    console.log(this.totalAmount)
}
selectedProduct(data:any){
let product = data.value
this.wholsalerform.get('pname').setValue(product.name)
}
}