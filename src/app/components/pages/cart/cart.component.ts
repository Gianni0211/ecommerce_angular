import { Component, OnInit, Input  } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart : Cart;
details: any[] = [];
total: number;


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe(cart => {
      this.cart = cart;
      
      let prices = [];
      cart.details.forEach(det => {
        this.details.push(det);
        let price = det.quantity * det.item.price;
        prices.push(price);
      });
      this.total = prices.reduce((acc, curr) => acc + curr, 0);
      
      
    }) 
  }
}
