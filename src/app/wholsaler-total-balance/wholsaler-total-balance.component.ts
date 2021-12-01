import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-wholsaler-total-balance',
  templateUrl: './wholsaler-total-balance.component.html',
  styleUrls: ['./wholsaler-total-balance.component.scss']
})
export class WholsalerTotalBalanceComponent implements OnInit {
  totalBalanceList: any = [];
  filterTerm: any;
  nameOfwholsaler: any = [];
  searchByDate: any;
  showDataTable: boolean = false;
  totalAmount: any;
  totalPaid: any;
  totalBalance:any;
  tempArray:any = [];
  constructor(private http: FirebaseService) { }

  ngOnInit(): void {
    this.getWholsalerBalance()
    this.getNameofWholsaler()
  }
  getWholsalerBalance() {
    this.http.getOrderofWholsaler().subscribe(
      (res) => {
        this.totalBalanceList = res
        this.tempArray = res

      }
    )
  }
  getNameofWholsaler() {
    this.http.getwholsaler().subscribe(
      (res) => {
        this.nameOfwholsaler = res
      }
    )
  }
  search() {
    this.showDataTable = true
    this.totalBalanceList=this.tempArray.filter((item:any)=>{
    if(item.name == this.filterTerm)
    return item
    })
  }
  showallOrder() {
    this.filterTerm = '';
    this.searchByDate = '';
    this.showDataTable = true
  }
  total() {
    let total = 0;
    let paid = 0;
    let balance = 0;
    for (let item of this.totalBalanceList) {
      total += item['total']
      paid += item['Paid']
      balance += item['Balance']
      console.log(total)
      this.totalAmount = total
      this.totalPaid = paid
      this.totalBalance = balance
    }
  }
}
