import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcustomerComponent } from '../addcustomer/addcustomer.component';
import { CustomeroderComponent } from '../customeroder/customeroder.component';
import { DailyRateComponent } from '../daily-rate/daily-rate.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { OrderdetailComponent } from '../orderdetail/orderdetail.component';
import { PaymentOfCustomerComponent } from '../payment-of-customer/payment-of-customer.component';
import { PaymentOfWholesalerComponent } from '../payment-of-wholesaler/payment-of-wholesaler.component';
import { PaymentComponent } from '../payment/payment.component';
import { ProdbaldetailComponent } from '../prodbaldetail/prodbaldetail.component';
import { ProductComponent } from '../product/product.component';
import { ProductbalComponent } from '../productbal/productbal.component';
import { ProftLossComponent } from '../proft-loss/proft-loss.component';
import { TestComponent } from '../test/test.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { TotalBalnceOfCustomerComponent } from '../total-balnce-of-customer/total-balnce-of-customer.component';
import { WholesalerOrderDetailComponent } from '../wholesaler-order-detail/wholesaler-order-detail.component';
import { WholesalerComponent } from '../wholesaler/wholesaler.component';
import { WholsalerTotalBalanceComponent } from '../wholsaler-total-balance/wholsaler-total-balance.component';
import { WholsalerorderComponent } from '../wholsalerorder/wholsalerorder.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminlayoutComponent,
    children: [
      {
        path:'',
        component:HomeComponent
      },
      {
        path: 'admincustomer',
        component: AddcustomerComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'dailyrate',
        component: DailyRateComponent
      },
      {
        path: 'productbal',
        component: ProductbalComponent
      },
      {
        path: 'goto',
        component: ProdbaldetailComponent
      },

      {
        path: 'order',
        component: CustomeroderComponent
      },
      {
        path: 'Orderdetail',
        component: OrderdetailComponent
      },
      {
        path: 'payment',
        component: PaymentComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'wholesaler',
        component: WholesalerComponent
      },
      {
        path: 'orderpagewholsaler',
        component: WholesalerOrderDetailComponent
      },
      {
        path: 'paymentpageWholsaler',
        component: PaymentOfWholesalerComponent
      },
      {
        path: 'paymentpagecustomer',
        component: PaymentOfCustomerComponent
      },
      {
        path: 'orderpagecustomer',
        component: OrderdetailComponent
      },
      {
        path: 'Wholsaler',
        component: WholesalerOrderDetailComponent

      },
      {
        path: 'UpdateWholsaler',
        component: WholsalerorderComponent
      },
      {
        path: 'totalBalance',
        component: TotalBalnceOfCustomerComponent
      },
      {
        path: 'test',
        component: TestComponent
      },
      {
        path: 'wholsalerBalance',
        component: WholsalerTotalBalanceComponent
      },
      {
        path: 'goto',
        component: ProdbaldetailComponent
      },
      {
        path:'profitloss',
        component:ProftLossComponent
      },
      {
        path:'timeline',
        component:TimelineComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminmoduleRoutingModule { }
