import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/pages/cart/cart.component';

import { LoginComponent } from './components/pages/login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: HeaderComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
