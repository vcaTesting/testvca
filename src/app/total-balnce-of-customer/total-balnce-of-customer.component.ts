import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-total-balnce-of-customer',
  templateUrl: './total-balnce-of-customer.component.html',
  styleUrls: ['./total-balnce-of-customer.component.scss']
})
export class TotalBalnceOfCustomerComponent implements OnInit {
  totalBalanceList:any=[];
  tempData:any = [];
  filterTerm:any;
  CustomerName:any=[];
  searchByDate:any;
  paid:any;
  balance:any;
  showDataTable:boolean = false;
  total:any; 
  customerTotal:any=[];
  onSelectDate = ''
  constructor(private http:FirebaseService) { }

  ngOnInit(): void {
    this. getCustomeTotalBalance()
    this.getCustomerName()
  }
  getCustomeTotalBalance() {
    this.http.showCustomerOrder().subscribe(
      (res) => {
        this.totalBalanceList = res;
        this.tempData = res
      }
    )
  }
  getCustomerName(){
    this.http.getCustomer().subscribe(
      (res)=>{
        this.CustomerName = res
      }
    )
  }
  search(){
  this.showDataTable = true
  this.totalBalanceList =  this.tempData.filter((item:any)=>{
    if(item.name ==  this.filterTerm){
      return item
    }
    
  })
  this.selectedDate()
  }
  showallOrder(){
    this.filterTerm = ''
    this.searchByDate = '';
    this.showDataTable = true

  }
  cal(){
    let totalAmount=0;
    let totalBalance=0;
    let totalpaid=0;
    for(let item of this.totalBalanceList) {
      console.log(item)
      totalBalance+=item['Balance14'];
      totalpaid+=item['paid14']
      totalAmount+=item['total14']
    }
    this.balance = totalBalance
    this.total = totalAmount
    this.paid = totalpaid
    console.log(this.balance,"balance")
    console.log(this.total,"total")
    console.log(this.paid,"paid")
  } 

  selectedDate(){
    console.log("function call")
    console.log(this.filterTerm);
    this.showDataTable = true
    this.totalBalanceList =  this.tempData.filter((item:any)=>{
      if(item.name ==  this.searchByDate){
        return item
      }
    })
    this.cal()
    
    
  }
}
