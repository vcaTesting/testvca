import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { FormControl, FormGroup, FormsModule,  Validators  } from '@angular/forms';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-customeroder',
  templateUrl: './customeroder.component.html',
  styleUrls: ['./customeroder.component.scss']
})
export class CustomeroderComponent implements OnInit {
  @ViewChild('htmlData') htmlData:ElementRef | undefined;

  CustomerList:any=[];
  savedata:any=[];
  orderForm:any;
  TotalAmount:any=[];
  myModel = {
    Qantity:'',
    Qantity1:'',
    Qantity2:'',
    Qantity3:'',
    Qantity4:'',
    Qantity5:'',
    Qantity6:'',
    Qantity7:'',
    Qantity8:'',
    Qantity9:'',
    Qantity10:'',
    Qantity11:'',
    Qantity12:'',
    Qantity13:'',
    Qantity14:'',
    qt:0,
    pname:'',
    Total: 0,
    Weight: 0,
    rate: 0,
    Paid:0,
    Balance:0,
    Total1: 0,
    Total2:0,
    Total3:0,
    Total4:0,
    Total5:0,
    Total6:0,
    Total7:0,
    Total8:0,
    Total9:0,
    Total10:0,
    Total11:0,
    Total12:0,
    Total13:0,
    Total14:0,
    Weight1: 0,
    Weight2: 0,
    Weight3: 0,
    Weight4: 0,
    Weight5: 0,
    Weight6: 0,
    Weight7: 0,
    Weight8: 0,
    Weight9: 0,
    Weight10: 0,
    Weight11: 0,
    Weight12: 0,
    Weight13: 0,
    Weight14: 0,
    rate1: 0,
    rate2: 0,
    rate3: 0,
    rate4: 0,
    rate5: 0,
    rate6: 0,
    rate7: 0,
    rate8: 0,
    rate9: 0,
    rate10: 0,
    rate11: 0,
    rate12: 0,
    rate13: 0,    
    rate14: 0,
    Paid1:0,
    Paid2:0, 
    Paid3:0, 
    Paid4:0, 
    Paid5:0, 
    Paid6:0, 
    Paid7:0, 
    Paid8:0, 
    Paid9:0, 
    Paid10:0, 
    Paid11:0, 
    Paid12:0, 
    Paid13:0, 
    Paid14:0, 
    Balance1:0,
    Balance2:0,
    Balance3:0,
    Balance4:0,
    Balance5:0,
    Balance6:0,
    Balance7:0,
    Balance8:0,
    Balance9:0,
    Balance10:0,
    Balance11:0,
    Balance12:0,
    Balance13:0,
    Balance14:0,
    date:'',
    name: '',
  };
  DATA:any

  constructor(private http:FirebaseService)
     { }

  ngOnInit(): void {
  this.orderForm=new FormGroup({
    date:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required),
    productname:new FormControl('Wing'),
    Qantity:new FormControl(''),
    Rate:new FormControl(''),
    Weight:new FormControl(''),
    total:new FormControl(''),
    paid:new FormControl(''),
    Balance:new FormControl(''),
    productname1:new FormControl('Boneless'),
    Qantity1:new FormControl(''),
    Rate1:new FormControl(''),
    Weight1:new FormControl(''),
    total1:new FormControl(''),
    paid1:new FormControl(''),
    Balance1:new FormControl(''),
    productname2:new FormControl('Leg Boneless'),
    Qantity2:new FormControl(''),
    Rate2:new FormControl(''),
    Weight2:new FormControl(''),
    total2:new FormControl(''),
    paid2:new FormControl(''),
    Balance2:new FormControl(''),
    productname3:new FormControl('Boiler'),
    Qantity3:new FormControl(''),
    Rate3:new FormControl(''),
    Weight3:new FormControl(''),
    total3:new FormControl(''),
    paid3:new FormControl(''),
    Balance3:new FormControl(''),
    productname4:new FormControl('Coldress'),
    Qantity4:new FormControl(''),
    Rate4:new FormControl(''),
    Weight4:new FormControl(''),
    total4:new FormControl(''),
    paid4:new FormControl(''),
    Balance4:new FormControl(''),
    productname5:new FormControl('Tanduri'),
    Qantity5:new FormControl(''),
    Rate5:new FormControl(''),
    Weight5:new FormControl(''),
    total5:new FormControl(''),
    paid5:new FormControl(''),
    Balance5:new FormControl(''),
    productname6:new FormControl('Curry Cut'),
    Qantity6:new FormControl(''),
    Rate6:new FormControl(''),
    Weight6:new FormControl(''),
    total6:new FormControl(''),
    paid6:new FormControl(''),
    Balance6:new FormControl(''),
    productname7:new FormControl('Cut peace'),
    Qantity7:new FormControl(''),
    Rate7:new FormControl(''),
    Weight7:new FormControl(''),
    total7:new FormControl(''),
    paid7:new FormControl(''),
    Balance7:new FormControl(''),
    productname8:new FormControl('Leaver'),
    Qantity8:new FormControl(''),
    Rate8:new FormControl(''),
    Weight8:new FormControl(''),
    total8:new FormControl(''),
    paid8:new FormControl(''),
    Balance8:new FormControl(''),
    productname9:new FormControl('Skin'),
    Qantity9:new FormControl(''),
    Rate9:new FormControl(''),
    Weight9:new FormControl(''),
    total9:new FormControl(''),
    paid9:new FormControl(''),
    Balance9:new FormControl(''),
    productname10:new FormControl('Spcl leg'),
    Qantity10:new FormControl(''),
    Rate10:new FormControl(''),
    Weight10:new FormControl(''),
    total10:new FormControl(''),
    paid10:new FormControl(''),
    Balance10:new FormControl(''),
    productname11:new FormControl('Live bird'),
    Qantity11:new FormControl(''),
    Rate11:new FormControl(''),
    Weight11:new FormControl(''),
    total11:new FormControl(''),
    paid11:new FormControl(''),
    Balance11:new FormControl(''),
    productname12:new FormControl('Egg'),
    Qantity12:new FormControl(''),
    Rate12:new FormControl(''),
    Weight12:new FormControl(''),
    total12:new FormControl(''),
    paid12:new FormControl(''),
    Balance12:new FormControl(''),
    productname13:new FormControl('gavran'),
    Qantity13:new FormControl(''),
    Rate13:new FormControl(''),
    Weight13:new FormControl(''),
    total13:new FormControl(''),
    paid13:new FormControl(''),
    Balance13:new FormControl(''),
    productname14:new FormControl('Total'),
    Qantity14:new FormControl(''),
    Rate14:new FormControl(''),
    Weight14:new FormControl(''),
    total14:new FormControl(''),
    paid14:new FormControl(''),
    Balance14:new FormControl(''),
  })
  this.getCustomerName()
  }

calculate() {
  this.myModel.Total = this.myModel.Weight * 1 * this.myModel.rate * 1
  this.myModel.Total1 = this.myModel.Weight1 * 1 * this.myModel.rate1 * 1
  this.myModel.Total2 = this.myModel.Weight2 * 1 * this.myModel.rate2 * 1
  this.myModel.Total3 = this.myModel.Weight3 * 1 * this.myModel.rate3 * 1
  this.myModel.Total4 = this.myModel.Weight4 * 1 * this.myModel.rate4 * 1
  this.myModel.Total5 = this.myModel.rate5 * 1 * this.myModel.qt * 1
  this.myModel.Total6 = this.myModel.Weight6 * 1 * this.myModel.rate6 * 1
  this.myModel.Total7 = this.myModel.Weight7 * 1 * this.myModel.rate7 * 1
  this.myModel.Total8 = this.myModel.Weight8 * 1 * this.myModel.rate8 * 1
  this.myModel.Total9 = this.myModel.Weight9 * 1 * this.myModel.rate9 * 1
  this.myModel.Total10 = this.myModel.Weight10 * 1 * this.myModel.rate10 * 1
  this.myModel.Total11 = this.myModel.Weight11 * 1 * this.myModel.rate11 * 1
  this.myModel.Total12 = this.myModel.Weight12 * 1 * this.myModel.rate12 * 1
  this.myModel.Total13 = this.myModel.Weight13 * 1 * this.myModel.rate13 * 1
  this.myModel.Total14 = this.myModel.Total * 1 + this.myModel.Total1 * 1 + this.myModel.Total2 * 1 + this.myModel.Total3 * 1
  + this.myModel.Total4 * 1 + this.myModel.Total5 * 1 + this.myModel.Total6 * 1 + this.myModel.Total7 * 1 + this.myModel.Total8 * 1
  + this.myModel.Total9 * 1 + this.myModel.Total10 * 1  + this.myModel.Total11 * 1 + this.myModel.Total12 * 1 + this.myModel.Total13 * 1   
  

}


cal(){

this.myModel.Balance=this.myModel.Total  * 1 - this.myModel.Paid * 1
 this.myModel.Balance1=this.myModel.Total1  * 1 - this.myModel.Paid1 * 1
 this.myModel.Balance2=this.myModel.Total2  * 1 - this.myModel.Paid2 * 1
 this.myModel.Balance3=this.myModel.Total3  * 1 - this.myModel.Paid3 * 1
 this.myModel.Balance4=this.myModel.Total4  * 1 - this.myModel.Paid4 * 1
 this.myModel.Balance5=this.myModel.Total5  * 1 - this.myModel.Paid5 * 1
 this.myModel.Balance6=this.myModel.Total6  * 1 - this.myModel.Paid6 * 1
 this.myModel.Balance7=this.myModel.Total7  * 1 - this.myModel.Paid7 * 1
 this.myModel.Balance8=this.myModel.Total8  * 1 - this.myModel.Paid8 * 1
 this.myModel.Balance9=this.myModel.Total9  * 1 - this.myModel.Paid9 * 1
 this.myModel.Balance10=this.myModel.Total10  * 1 - this.myModel.Paid10 * 1
 this.myModel.Balance11=this.myModel.Total11  * 1 - this.myModel.Paid11 * 1
 this.myModel.Balance12=this.myModel.Total12  * 1 - this.myModel.Paid12 * 1
 this.myModel.Balance13=this.myModel.Total13  * 1 - this.myModel.Paid13 * 1
 this.myModel.Balance14=this.myModel.Balance  * 1 + this.myModel.Balance1 * 1 + this.myModel.Balance2 * 1 + this.myModel.Balance3 * 1
 + this.myModel.Balance4 * 1 + this.myModel.Balance5 * 1 + this.myModel.Balance6 * 1 + this.myModel.Balance7 * 1 + this.myModel.Balance8 * 1
 + this.myModel.Balance9 * 1 + this.myModel.Balance10 * 1 + this.myModel.Balance11 * 1 + this.myModel.Balance12 * 1 + this.myModel.Balance13 * 1
 this.myModel.Paid14=this.myModel.Paid * 1 + this.myModel.Paid1 * 1 + this.myModel.Paid2 * 1 +this.myModel.Paid3 * 1 +
 this.myModel.Paid4 * 1 + this.myModel.Paid5 * 1 + this.myModel.Paid6 * 1 + this.myModel.Paid7 * 1 +
 this.myModel.Paid8 * 1 + this.myModel.Paid9 * 1 + this.myModel.Paid10 * 1 + this.myModel.Paid11 * 1 +
 this.myModel.Paid12 * 1 + this.myModel.Paid13 * 1
}

submit(){
  if(this.orderForm.valid){
    this.http.saveCustomerOrder(this.orderForm.value).then(
      (res)=>{
        console.log(res)
        alert("Order Save Successfully")
      }
    )
  }else{
alert("please Select Date and Name")
  }



}
getCustomerName(){
  this.http.getCustomer().subscribe(
    (res)=>{
      this.CustomerList = res
    }
  )
}
public openPDF():void {
   this.DATA = document.getElementById('htmlData');
      
  html2canvas(this.DATA).then(canvas => {
      
      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;
      
      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
      
      PDF.save('angular-demo.pdf');
    });     
  }
}