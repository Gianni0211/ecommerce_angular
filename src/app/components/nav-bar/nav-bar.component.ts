import { Component, OnInit } from '@angular/core';
import { faCashRegister, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';

import { JwtService } from 'src/app/utils/jwt.service';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  
  faCashRegister = faCashRegister;
  faShoppingCart = faShoppingCart;
  userName : string;
  itemsCount: number;
  constructor(
    private jwtService: JwtService,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
  this.userName = this.jwtService.decodeToken().user_name;
  this.cartService.getCart().subscribe(cart => {
   this.itemsCount =  cart.details.length;
    
  })
  }

}
