import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 public forms:any;
 wholsalerList:any=[]
  constructor(private router:Router,
    private httpService:FirebaseService) { }

  ngOnInit(): void {
    this.forms=new FormGroup({
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })
   
  }

  
  login(){
    if(this.forms.controls.email.value=="alfej@gmail.com" && this.forms.controls.password.value=="Nawabr@123")
    {
      this.router.navigate(['/admin'])
}
else{
  alert("you enter invalid Email or Password")
}
console.log(this.forms)
  }

}
