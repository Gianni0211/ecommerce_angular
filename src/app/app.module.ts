import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/pages/login/login.component';
import { AddBtnComponent } from './components/add-btn/add-btn.component';
import { QuantityModalComponent } from './components/quantity-modal/quantity-modal.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CartRowComponent } from './components/cart-row/cart-row.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    CardComponent,
    LoginComponent,
    AddBtnComponent,
    QuantityModalComponent,
    CartComponent,
    CartRowComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
