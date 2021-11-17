import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { ProdbaldetailComponent } from './prodbaldetail/prodbaldetail.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./adminmodule/adminmodule.module').then(m => m.AdminmoduleModule)
  },
  {
    path: '', component: LoginComponent
  },
  {
    path: 'goto',
    component: ProdbaldetailComponent
  },
  {
    path: 'orderpagewholsaler',
    component: HomeComponent
  },
  
  {
    path: 'back',
    loadChildren: () => import('./adminmodule/adminmodule.module').then(m => m.AdminmoduleModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
