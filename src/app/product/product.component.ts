import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public productform: any
  show: any = [];

  data: any = [];
  constructor(private http: FirebaseService) { }

  ngOnInit(): void {
    this.productform = new FormGroup({
      date: new FormControl('', Validators.required),
      wing: new FormControl('Wing'),
      wfr: new FormControl('0'),
      wmr: new FormControl('0'),
      wpr: new FormControl('0'),
      wprp: new FormControl('0'),
      bonelees: new FormControl('Boneless'),
      bfr: new FormControl('0'),
      bmr: new FormControl('0'),
      bpr: new FormControl('0'),
      bprp: new FormControl('0'),
      legbonelees: new FormControl('Legbonelees'),
      lfr: new FormControl('0'),
      lmr: new FormControl('0'),
      lpr: new FormControl('0'),
      lprp: new FormControl('0'),
      boiler: new FormControl('Boiler'),
      boilerfr: new FormControl('0'),
      boilermr: new FormControl('0'),
      boilerpr: new FormControl('0'),
      boilerprp: new FormControl('0'),
      coldress: new FormControl('coldress'),
      cfr: new FormControl('0'),
      cmr: new FormControl('0'),
      cpr: new FormControl('0'),
      cprp: new FormControl('0'),
      tanduri: new FormControl('Tanduri'),
      tfr: new FormControl('0'),
      tmr: new FormControl('0'),
      tpr: new FormControl('0'),
      tprp: new FormControl('0'),
      currycut: new FormControl('Curry cut'),
      curryfr: new FormControl('0'),
      currymr: new FormControl('0'),
      currypr: new FormControl('0'),
      curryprp: new FormControl('0'),
      cutpeace: new FormControl('Cut Peace'),
      cutfr: new FormControl('0'),
      cutmr: new FormControl('0'),
      cutpr: new FormControl('0'),
      cutprp: new FormControl('0'),
      leaver: new FormControl('Leaver'),
      leaverFixRate: new FormControl('0'),
      leavermr: new FormControl('0'),
      leaverpr: new FormControl('0'),
      leaverprp: new FormControl('0'),
      skin: new FormControl('Skin'),
      skinfr: new FormControl('0'),
      skinmr: new FormControl('0'),
      skinpr: new FormControl('0'),
      skinprp: new FormControl('0'),
      spclleg: new FormControl('Special Leg'),
      splfr: new FormControl('0'),
      splmr: new FormControl('0'),
      splpr: new FormControl('0'),
      splprp: new FormControl('0'),
      livebird: new FormControl('Live Bird'),
      lbfr: new FormControl('0'),
      lbmr: new FormControl('0'),
      lbpr: new FormControl('0'),
      lbprp: new FormControl('0'),
      egg: new FormControl('Egg'),
      eggfr: new FormControl('0'),
      eggmr: new FormControl('0'),
      eggpr: new FormControl('0'),
      eggprp: new FormControl('0'),
      gavran: new FormControl('Gavran'),
      gfr: new FormControl('0'),
      gmr: new FormControl('0'),
      gpr: new FormControl('0'),
      gprp: new FormControl('0'),

    })
  }

  submit() {
    // this.show.push(this.productform.value)
    // this._saveproduct.saveproduct(this.show).subscribe(

    //   (Response) => {
    //     console.log(Response)
    //     alert("Data Save SuccessFully")
    //     this.productform.reset()
    //   },
    //   (err) => console.log(err)
    // )
    if(this.productform.valid){
      this.http.setTodayRate(this.productform.value).then(
        (res)=>{
          console.log("Todays Rate Save Successfully")
        }
      )
      this.productform.reset()
     }else{
       alert("please Select Date")
     }
    }
}
