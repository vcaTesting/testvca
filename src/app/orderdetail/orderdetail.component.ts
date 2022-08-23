import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.scss']
})
export class OrderdetailComponent implements OnInit {
  customerOrderList: any = [];
  CustomerName: any = [];
  filterTerm: any;
  searchByDate: any;
  showDatatable:boolean = false
  DATA:any;
  val = '
  constructor(private http: FirebaseService) { }

  ngOnInit(): void {
    this.getCustomerName();
  }
  getCustomeOrderdetail() {
    this.http.showCustomerOrder().subscribe(
      (res) => {
        this.customerOrderList = res
      }
    )
  }
  getCustomerName() {
    this.http.getCustomer().subscribe(
      (res) => {
        this.CustomerName = res
      }
    )
    this.getCustomeOrderdetail();

  }
  search() {

  this.showDatatable = true

  }
  showallOrder(){
    this.filterTerm = '';
    this.searchByDate = '';
    this.showDatatable = true

  }
  downloadPdf(){
    this.DATA = document.getElementById('htmlData');
       
    html2canvas(this.DATA).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        PDF.text("Hello world!", 100, 10);

        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, 100, fileHeight)
        
        PDF.save('angular-demo.pdf');
       });     
  }
}
