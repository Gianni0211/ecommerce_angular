import { Component, OnInit } from '@angular/core';
import { faCashRegister, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';
import { Subscription } from 'rxjs';
import { JwtService } from 'src/app/utils/jwt.service';
import { OrderService } from 'src/app/services/order.service';



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
  cartSubscription:Subscription;
  orderSubscription: Subscription;
  
  constructor(
    private jwtService: JwtService,
    private cartService: CartService,
    private orderService: OrderService
    
    ) { 
      this.cartSubscription = this.cartService.getClickEvent().subscribe(()=>{
      this.updateCount();
      });
      this.orderSubscription = this.orderService.getClickEvent().subscribe(() => {
        this.clearCount();
      })
      
    }

  ngOnInit(): void {
    this.userName = this.jwtService.decodeToken().user_name;
    this.cartService.getCart().subscribe((cart) => {
     this.itemsCount =  cart.details.length;
    
    })
  }
  updateCount(){
    
    
    this.userName = this.jwtService.decodeToken().user_name;
    this.cartService.getCart().subscribe(cart => {
     this.itemsCount =  cart.details.length;
    })
  }
  clearCount(){
    this.itemsCount = 0;
  }

}
