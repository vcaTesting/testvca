import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

//module 
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { DailyRateComponent } from './daily-rate/daily-rate.component';
import { ProductbalComponent } from './productbal/productbal.component';
import { ProdbaldetailComponent } from './prodbaldetail/prodbaldetail.component';
import { CustomeroderComponent } from './customeroder/customeroder.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { WholesalerComponent } from './wholesaler/wholesaler.component';
import { PaymentComponent } from './payment/payment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { WholsalerorderComponent } from './wholsalerorder/wholsalerorder.component';
import { PaymentOfWholesalerComponent } from './payment-of-wholesaler/payment-of-wholesaler.component';
import { PaymentOfCustomerComponent } from './payment-of-customer/payment-of-customer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { WholesalerOrderDetailComponent } from './wholesaler-order-detail/wholesaler-order-detail.component';
import { TotalBalnceOfCustomerComponent } from './total-balnce-of-customer/total-balnce-of-customer.component';
import { TestComponent } from './test/test.component';
import { WholsalerTotalBalanceComponent } from './wholsaler-total-balance/wholsaler-total-balance.component';
import { ProftLossComponent } from './proft-loss/proft-loss.component';
const firebaseConfig = {
  apiKey: "AIzaSyAULT8jgP2zMgs5dJVWvjd7LCLQYrxdYsQ",
  authDomain: "parvej-d8cec.firebaseapp.com",
  databaseURL: "https://parvej-d8cec-default-rtdb.firebaseio.com",
  projectId: "parvej-d8cec",
  storageBucket: "parvej-d8cec.appspot.com",
  messagingSenderId: "254828400205",
  appId: "1:254828400205:web:df814d8075809fc8355604",
  measurementId: "G-8E5M3P1Z7X"
  };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddcustomerComponent,
    ProductComponent,
    DailyRateComponent,
    ProductbalComponent,
    ProdbaldetailComponent,
    CustomeroderComponent,
    OrderdetailComponent,
    WholesalerComponent,
    PaymentComponent,
    HomeComponent,
    WholsalerorderComponent,
    PaymentOfWholesalerComponent,
    PaymentOfCustomerComponent,
    WholesalerOrderDetailComponent,
    TotalBalnceOfCustomerComponent,
    TestComponent,
    WholsalerTotalBalanceComponent,
    ProftLossComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatTabsModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    Ng2SearchPipeModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,// storage
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
