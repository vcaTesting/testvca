import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
public addcustomer:any;
public saveWholesalerform:any;
nameList:any=[]
  constructor( private http:FirebaseService) { }

  ngOnInit(): void {
    this.addcustomer = new FormGroup({

      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.maxLength(10)])
    })
    this.saveWholesalerform = new FormGroup({
      name:new FormControl('',Validators.required),
      address:new FormControl(''),
      number:new FormControl('')
    })
    this.getName()
  }
  submit(){
    this.http.savetest(this.addcustomer.value).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    )
    this.addcustomer.reset();
  }
  getName(){
    this.http.showtest().subscribe(
      (res)=>{
       this.nameList = res
      }
    )
  }
  addWholesaler(){
    this.http.savetest1(this.saveWholesalerform.value).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    )
    this.saveWholesalerform.reset();

  }
  
}
