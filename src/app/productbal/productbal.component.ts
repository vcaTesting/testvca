import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-productbal',
  templateUrl: './productbal.component.html',
  styleUrls: ['./productbal.component.scss']
})
export class ProductbalComponent implements OnInit {
public balanceforms:any;
add:any=[];
myModel = {
 Total:0,
 saleout:0,
 Balance:0,
 Total1:0,
 saleout1:0,
 Balance1:0,
 Total2:0,
 saleout2:0,
 Balance2:0,
 Total3:0,
 saleout3:0,
 Balance3:0,
 Total4:0,
 saleout4:0,
 Balance4:0,
 Total5:0,
 saleout5:0,
 Balance5:0,
 Total6:0,
 saleout6:0,
 Balance6:0,
 Total7:0,
 saleout7:0,
 Balance7:0,
 Total8:0,
 saleout8:0,
 Balance8:0,
 Total9:0,
 saleout9:0,
 Balance9:0,
 Total10:0,
 saleout10:0,
 Balance10:0,
 Total11:0,
 saleout11:0,
 Balance11:0,
 Total12:0,
 saleout12:0,
 Balance12:0,
 Total13:0,
 saleout13:0,
 Balance13:0,
}


constructor(private _add:FirebaseService,
    private router:Router) { }

  ngOnInit(): void {
this.balanceforms= new FormGroup({
  date:new FormControl('',Validators.required),
  p1:new FormControl('Wing'),
  t1:new FormControl('0'),
  b1:new FormControl('0'),
  s1:new FormControl('0'),
  p2:new FormControl('Leg Boneless'),
  t2:new FormControl('0'),
  b2:new FormControl('0'),
  s2:new FormControl('0'),
  p3:new FormControl('Boiler'),
  t3:new FormControl('0'),
  b3:new FormControl('0'),
  s3:new FormControl('0'),
  p4:new FormControl('Coldress'),
  t4:new FormControl('0'),
  b4:new FormControl('0'),
  s4:new FormControl('0'),
  p5:new FormControl('Tanduri'),
  t5:new FormControl('0'),
  b5:new FormControl('0'),
  s5:new FormControl('0'),
  p6:new FormControl('Cury Cut'),
  t6:new FormControl('0'),
  b6:new FormControl('0'),
  s6:new FormControl('0'),
  p7:new FormControl('Cut peace'),
  t7:new FormControl('0'),
  b7:new FormControl('0'),
  s7:new FormControl('0'),
  p8:new FormControl('Leaver'),
  t8:new FormControl('0'),
  b8:new FormControl('0'),
  s8:new FormControl('0'),
  p9:new FormControl('Skin'),
  t9:new FormControl('0'),
  b9:new FormControl('0'),
  s9:new FormControl('0'),
  p10:new FormControl('Spcl Leg'),
  t10:new FormControl('0'),
  b10:new FormControl('0'),
  s10:new FormControl('0'),
  p11:new FormControl('Live bird'),
  t11:new FormControl('0'),
  b11:new FormControl('0'),
  s11:new FormControl('0'),
  p12:new FormControl('Egg'),
  t12:new FormControl('0'),
  b12:new FormControl('0'),
  s12:new FormControl('0'),
  p13:new FormControl('Gavran'),
  t13:new FormControl('0'),
  b13:new FormControl('0'),
  s13:new FormControl('0'),
})
  }
  submit(){
 if(this.balanceforms.valid){
   this._add.saveProducBal(this.balanceforms.value).then(
     (res)=>{
       console.log(res)
       alert("Data save Succussful")
     }
   )
   this.balanceforms.reset()

 }
  } 
  goto(){
    this.router.navigate(['/goto'])
  }

  cal(){
    this.myModel.Balance=this.myModel.Total-this.myModel.saleout
    this.myModel.Balance1=this.myModel.Total1-this.myModel.saleout1
    this.myModel.Balance2=this.myModel.Total2-this.myModel.saleout2
    this.myModel.Balance3=this.myModel.Total3-this.myModel.saleout3
    this.myModel.Balance4=this.myModel.Total4-this.myModel.saleout4
    this.myModel.Balance5=this.myModel.Total5-this.myModel.saleout5
    this.myModel.Balance6=this.myModel.Total6-this.myModel.saleout6
    this.myModel.Balance7=this.myModel.Total7-this.myModel.saleout7
    this.myModel.Balance8=this.myModel.Total8-this.myModel.saleout8
    this.myModel.Balance9=this.myModel.Total9-this.myModel.saleout9
    this.myModel.Balance10=this.myModel.Total10-this.myModel.saleout10
    this.myModel.Balance11=this.myModel.Total11-this.myModel.saleout11
    this.myModel.Balance12=this.myModel.Total12-this.myModel.saleout12
    // this.myModel.Balance13=this.myModel.Total13-this.myModel.saleout13

  }

}
