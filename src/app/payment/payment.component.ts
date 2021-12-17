import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../firebase.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  customerpaymentform: any;
  wholsalerpayment: any;
  data: any = [];
  paymentOfCustomer: any = [];
  paymentW:any=[];
  wholsalerName:any=[];
  DATA:any;
  SelectedType:any
  isCustomerCompesation:boolean =  false
  isWholsalerCompesation:boolean =  false
  selectedCustomer:any;
  currentDate:any;
  customerTotalBalanceList:any=[];
  customerBalance:any;
  todayPaid:any;
  Customertotal:number = 0;
  selectedNameOfCustomer:any
  showCustomerInvoice:boolean = false;
  showWholsalerInvoice:boolean = false;
  status:any;
  selectedWholsaler:any;
  totalWholsalerBalance:any=[];
  wholsalerBalance:any;
  WholsalerTotal:any =0;
  todayWholsalerPaid:any;
  todayDate:any
  constructor(private http: FirebaseService,
    private datePipe:DatePipe,
    private fb: FormBuilder,
   
    ) { }

  ngOnInit(): void {
    this.showcustomer()
    this.getCustomeTotalBalance()
    this.getWholsalerBalance()
    this.cal()
    this.customerpaymentform = new FormGroup({
      date: new FormControl(''),
      name: new FormControl(''),
      cash: new FormControl(''),
      cheque: new FormControl(''),
      Chequeno: new FormControl(''),
    })
    this.wholsalerpayment = new FormGroup({
      date: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      cash: new FormControl(''),
      cheque: new FormControl(''),
      Chequeno: new FormControl(''),
    })
    this.getWholsalerName()
     this.currentDate = new Date();
    this.todayDate= this.datePipe.transform(this.currentDate, 'yyyy-MM-dd')
  }
  showcustomer() {
    this.http.getCustomer().subscribe(
      (res)=>{
        this.data = res;
      })
  }
  submitCustomerPayment() {

        this.DATA = document.getElementById('htmlData');
         
        html2canvas(this.DATA).then(canvas => {
            
            let fileWidth = 108;
            let fileHeight = canvas.height * fileWidth / canvas.width;
            
            const FILEURI = canvas.toDataURL('image/png')
            let PDF = new jsPDF('p', 'mm',[ 130, 155]);
  
            let position = 0;
            PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
            
            PDF.save('angular-demo.pdf');
           });     
          
      this.http.saveCustomerPay(this.customerpaymentform.value).then(
        (res)=> {
          alert("your data upload successful")
        }
      )
  }
 
  submitwholsalerPayment(){
    if(this.wholsalerpayment.valid){
      this.DATA = document.getElementById('htmlData');
       
      html2canvas(this.DATA).then(canvas => {
          
          let fileWidth = 108;
          let fileHeight = canvas.height * fileWidth / canvas.width;
          
          const FILEURI = canvas.toDataURL('image/png')
          let PDF = new jsPDF('p', 'mm',[ 130, 155]);

          let position = 0;
          PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
          
          PDF.save('angular-demo.pdf');
         });     
      
      this.http.setWholsalerpayment(this.wholsalerpayment.value).then(
        (res)=> { 
          alert("Data Payment SuccessFully")
        }
      )
      this.wholsalerpayment.reset()
      console.log(this.wholsalerpayment.value)
    }else{
      alert("please select date")
    }
  }

  getWholsalerName(){
    this.http.getwholsaler().subscribe(
      (res)=>{
        this.wholsalerName = res
      }
    )
  }

  onSelectType(SelectedType:any){
    this.showCustomerInvoice=false;
    this.showWholsalerInvoice=false
    if(SelectedType.value == "Compesation of Customer"){
      this.isCustomerCompesation = true;
      this.isWholsalerCompesation = false  
    }
    else{
      this.isWholsalerCompesation = true  
      this.isCustomerCompesation = false;
    }
  }

  selectedCustomerDetail(data:any){
    this.showCustomerInvoice = true
     this.selectedCustomer = data.value
     this.customerpaymentform.get('name').setValue(this.selectedCustomer.name)
     this.customerpaymentform.get('date').setValue(this.todayDate)

     this.cal()
   }

   getCustomeTotalBalance() {
    this.http.showCustomerOrder().subscribe(
      (res) => {
        this.customerTotalBalanceList = res;
      }
    )
    this.cal()
  }
  cal() {
    let totalBalance = 0;
    for (let item of this.customerTotalBalanceList) {
      if (item.name == this.selectedCustomer.name) {
      totalBalance += item['Balance14'];
    }
  }
    this.customerBalance = totalBalance
    if(this.customerBalance == 0){
      this.status= 'PAID'

    }else{
      this.status= 'UNPAID'
}
  }
  totalCstomerBalance(){
    this.Customertotal=  this.customerBalance - this.todayPaid 
  }

  selectedWholsalerDetail(data:any){
    this.showWholsalerInvoice = true
    this.selectedWholsaler = data.value
    this.wholsalerpayment.get('name').setValue(this.selectedWholsaler.name)
     this.wholsalerpayment.get('date').setValue(this.currentDate)
    console.log(data)
    this.total()
  }
  
  getWholsalerBalance() {
    this.http.getOrderofWholsaler().subscribe(
      (res) => {
        this.totalWholsalerBalance = res
        console.log(this.totalWholsalerBalance)
      }
    )
    this.total()
  }

  total() {
    let balance = 0;
    for (let item of this.totalWholsalerBalance) {
      if(item.name == this.selectedWholsaler.name)
      balance += item['Balance']
    }
    this.wholsalerBalance = balance
    console.log(this.wholsalerBalance)
  }
  caltotalWholsalerBalance(){
    this.WholsalerTotal = this.wholsalerBalance - this.todayWholsalerPaid 
  }
 
}
