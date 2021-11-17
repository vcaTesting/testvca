import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-prodbaldetail',
  templateUrl: './prodbaldetail.component.html',
  styleUrls: ['./prodbaldetail.component.scss']
})
export class ProdbaldetailComponent implements OnInit {
  data:any=[];
  searchByDate:any;
showDatatable:boolean = false
  constructor(private http:FirebaseService,
    private router:Router
    ) { }

  ngOnInit(): void {

    this.showproductBalance();
  }
  showproductBalance(){
this.http.showProductBalnce.subscribe(
  (res)=>{
    this.data = res
  }
)
console.log(this.data)
}

back(){
  this.router.navigate(['/back'])
}
search(){
this.showDatatable = true
}

}
