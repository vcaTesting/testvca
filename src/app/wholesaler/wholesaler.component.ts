import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-wholesaler',
  templateUrl: './wholesaler.component.html',
  styleUrls: ['./wholesaler.component.scss']
})
export class WholesalerComponent implements OnInit {
  saveWholesalerform:any;
  addwholesaler:any=[]
  data:any=[];
  search:any;
  wholsaler:any
  WholsalerNameList:any=[]
  myModel={
    Weight:0,
    rate:0,
    Total:0,
    paid:0,
    balance:0
  }
  constructor(private save:FirebaseService,
    private router:Router
     ) { 
    this.saveWholesalerform = new FormGroup({
      name:new FormControl('',Validators.required),
      address:new FormControl(''),
      number:new FormControl('')
    })
  }

  ngOnInit(): void {
   
    this.WholsalerName()
  }


addWholesaler(){
  if(this.saveWholesalerform.valid){
    this.save.savewholesaler(this.saveWholesalerform.value).then(
      (res)=>{
        console.log(res)
      }
    )
      this.saveWholesalerform.reset();
  }else{
    alert("please enter Name")
  }

}

WholsalerName(){
  // this.save.showWholsaler().subscribe(
  //   (Response)=>{
  //     const name= JSON.stringify(Response)
  //       this.WholsalerNameList = JSON.parse(name)
  //     },
      
  //     (err)=>console.log(err)
  //   ) 
  this.save.getwholsaler().subscribe(
    (res)=>{
      this.WholsalerNameList = res;
    }
  )
  }
  gotoWholsalerOrder(){
   this.router.navigate(['/orderpagewholsaler'])
  }
  gotoWholsalerPayment(){
    this.router.navigate(['/paymentpageWholsaler'])

  }
}

