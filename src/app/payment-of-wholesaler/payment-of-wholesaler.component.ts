import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-payment-of-wholesaler',
  templateUrl: './payment-of-wholesaler.component.html',
  styleUrls: ['./payment-of-wholesaler.component.scss']
})
export class PaymentOfWholesalerComponent implements OnInit {
  WholesalerPaymentList:any=[];
  searchbyName:any;
  nameOfWholsaler:any=[];
  showDatatable:boolean = false;
  searchByDate:any;
  DATA:any;
  constructor(private  http:FirebaseService) { }

  ngOnInit(): void {
    this.getPaymentofWholesaler()
    this.gtwholsalerName()
  }
getPaymentofWholesaler(){
  this.http.getWholsalerpayment().subscribe(
    (res)=>{
      console.log(res)
      this.WholesalerPaymentList = res
    }
  )
}
gtwholsalerName(){
  this.http.getwholsaler().subscribe(
    (res)=>{
     this.nameOfWholsaler = res
    }
  )
}
showallOrder(){
  this.searchByDate= '';
  this.searchbyName = '';
  this.showDatatable = true

}
search(){
  this.showDatatable = true;
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
