import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MerchentLoginComponent } from './merchent-login/merchent-login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',component:MerchentLoginComponent},
  {path:'weclome',component:WelcomeComponent},
  {path:'Product',component:ProductListComponent},
  {path:'',redirectTo:'Product',pathMatch:'full'},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
