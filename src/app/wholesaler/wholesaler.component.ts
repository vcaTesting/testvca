import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  totalBalanceList:any=[];
  tempArray:any=[];
  totalAmount:any;
  totalPaid:any;
  totalBalance:any
  selectedWholesalerName = ''
  selectedWholesalerMobile = ''
  selectedWholesalerAddress = ''
  updateWholesalerDetails:any
  wholesaler: any;
  showDetails: any;
  constructor(private save:FirebaseService,
    private router:Router,
    private snackBar: MatSnackBar
     ) { 
    this.saveWholesalerform = new FormGroup({
      name:new FormControl('',Validators.required),
      address:new FormControl('',Validators.required),
      number:new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    })
    this.updateWholesalerDetails = new FormGroup({
      name:new FormControl('',Validators.required),
      address:new FormControl(''),
      number:new FormControl('')
    })
  }

  ngOnInit(): void {
   this.getWholsalerBalance()
    this.WholsalerName()
  }


addWholesaler(){
  if(this.saveWholesalerform.valid){
    this.save.savewholesaler(this.saveWholesalerform.value).then(
      (res)=>{
        console.log(res)
        console.log(this.saveWholesalerform.value)
      }
    )
      this.saveWholesalerform.reset();
  }else{
    alert("please enter Name")
  }

}

WholsalerName(){ 
  this.save.getwholsaler().subscribe(
    (res)=>{
      this.WholsalerNameList = res;
    }
  )
  console.log(this.WholsalerNameList)
  }
  gotoWholsalerOrder(){
   this.router.navigate(['/orderpagewholsaler'])
  }
  gotoWholsalerPayment(){
    this.router.navigate(['/paymentpageWholsaler'])

  }
  getWholsalerBalance() {
    this.save.getOrderofWholsaler().subscribe(
      (res) => {
        this.totalBalanceList = res
        this.tempArray = res
      })
  }
  total(){
    let total = 0;
    let paid = 0;
    let balance = 0;
    for (let item of this.totalBalanceList) {
      total += item['total']
      paid += item['Paid']
      balance += item['Balance']
      this.totalAmount = total
      this.totalPaid = paid
      this.totalBalance = balance
    }
  }
updateWholsalerBalance(name:any){
  this.totalBalanceList = this.tempArray.filter((item:any)=>{
    if(item.name == name){
     return item
    }
  })
  this.total()
}

editWholesaler(item:any){
this.updateWholesalerDetails.get('name').setValue(item.name)
this.updateWholesalerDetails.get('address').setValue(item.address)
this.updateWholesalerDetails.get('number').setValue(item.number)
}

deleteWholsalerDetails(wholesaler:any){
this.wholesaler = wholesaler
}

deleteWholsaler(deleteWholsaler: any) {
  this.save.deleteWholsaler(deleteWholsaler);
  console.log(deleteWholsaler,"deleted")   
   this.showNotification(
  'snackbar-danger',
  'Delete Record Successfully...!!!',
  'bottom',
  'center'
);
}

showNotification(colorName:any,text:any, placementFrom:any, placementAlign:any) {
  this.snackBar.open(text, '', {
    duration: 2000,
    verticalPosition: 'top',
    horizontalPosition: 'right',
    panelClass: 'snackbar-danger'
  });
}
viewDetails(item:any){
this.selectedWholesalerName = item.name
this.selectedWholesalerAddress = item.address
this.selectedWholesalerMobile = item.number
}
}

