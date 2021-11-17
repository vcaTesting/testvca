import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../firebase.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
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
  DATA:any
  constructor(private http: FirebaseService) { }

  ngOnInit(): void {
    this.showcustomer()
    this.customerpaymentform = new FormGroup({
      date: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
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

  }
  showcustomer() {
    this.http.getCustomer().subscribe(
      (res)=>{
        this.data = res;
      })
  }
  submitCustomerPayment() {
    if(this.customerpaymentform.value){
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
          }
      this.http.saveCustomerPay(this.customerpaymentform.value).then(
        (res)=> {
          console.log(res)
          alert("your data upload successful")
        }
      )
      this.customerpaymentform.reset()
    }else{
      alert("please select Date And Name")
    }


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
          console.log(res)
          alert("Data Payment SuccessFully")
        }
      )
      this.wholsalerpayment.reset()
    }else{
      alert("please select date")
    }
  }

  getWholsalerName(){
    this.http.getwholsaler().subscribe(
      (res)=>{
        console.log(res)
        this.wholsalerName = res
      }
    )
  }
  
}
