import { Component, OnInit, Input  } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/Cart';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart : Cart = null;
details: any[] = [];
total: number;


  constructor(private cartService: CartService, private orderService: OrderService, private router : Router) { }

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
  saveOrder(){
    this.orderService.sendClickEvent();
    this.orderService.saveOrder().subscribe(data =>{
      
      alert("L'ordine è  stato effetuato")
      this.router.navigate(['home']);
      
    })
  }
}
