import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-wholesaler-order-detail',
  templateUrl: './wholesaler-order-detail.component.html',
  styleUrls: ['./wholesaler-order-detail.component.scss']
})
export class WholesalerOrderDetailComponent implements OnInit {
orderOfwholsaler:any=[];
nameOfwholsaler:any=[]
filterTerm:any;
showDatatable:boolean = false;
searchByDate:any;
pdfMake: any;
  constructor(private http:FirebaseService ) { }

  ngOnInit(): void {
    this.getWholsalerOrderDetail();
    this.getWholsalerName()
  }
getWholsalerOrderDetail(){
   this.http.getOrderofWholsaler().subscribe(
     (res)=>{
       this.orderOfwholsaler =res
       console.log(this.orderOfwholsaler);
     }
   )
   console.log(this.orderOfwholsaler.value);
}
getWholsalerName(){
  this.http.getwholsaler().subscribe(
    (res)=>{
      this.nameOfwholsaler =  res
      console.log(this.nameOfwholsaler.value);
    }
  )
  console.log(this.nameOfwholsaler.value);

}
search(){
this.showDatatable = true
}
showallOrder(){
  this.filterTerm='';
  this.searchByDate='';
  this.showDatatable = true

}

}
