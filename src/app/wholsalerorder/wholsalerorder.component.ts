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
  image: any
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
  }
  submit() {
    if (this.wholsalerform.valid) {
      this.http.setWholesaler(this.wholsalerform.value).then(
        (res) => {
          console.log(res)
          alert("Data save Successfully")
        }
      )
      this.wholsalerform.reset()
    } else {
      alert("Please Select Date")
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
}
