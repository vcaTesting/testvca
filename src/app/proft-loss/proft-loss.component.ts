import { Component, OnInit, } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-proft-loss',
  templateUrl: './proft-loss.component.html',
  styleUrls: ['./proft-loss.component.scss']
})
export class ProftLossComponent implements OnInit {
  data:any=[];
  wholsalerList:any=[]
  unused=''
  constructor(private http:FirebaseService) {
   }
 
  ngOnInit(): void {
    this.getCustomerData()
  }
getCustomerData(){
  this.http.getCustomer().subscribe((res) => {
    this.data = res;
    console.log(this.data)
  })
}


getWholsalerDetail() {
  this.http.getwholsaler().subscribe(
    (res) => {
      this.wholsalerList = res
    }
  )
  
}
}


