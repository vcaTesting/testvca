import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';


@Component({
  selector: 'app-daily-rate',
  templateUrl: './daily-rate.component.html',
  styleUrls: ['./daily-rate.component.scss']
})
export class DailyRateComponent implements OnInit {
data:any=[];
searchByDate:any;
showDatatable:boolean = false
  constructor(private _showproduct:FirebaseService) { }

  ngOnInit(): void {
  this.showproducts();    

  }

  

showproducts(){
  
  this._showproduct.getTodayRate().subscribe(
    (res)=>{
      this.data = res
    }
  )
  
}
search(){
this.showDatatable = true 
}
}
