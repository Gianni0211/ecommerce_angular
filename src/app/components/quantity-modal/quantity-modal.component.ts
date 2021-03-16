import { Component, OnInit, Input } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/models/Item';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/Cart';

@Component({
  selector: 'app-quantity-modal',
  templateUrl: './quantity-modal.component.html',
  styleUrls: ['./quantity-modal.component.css']
})
export class QuantityModalComponent implements OnInit {
  @Input() item: Item;
  
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  quantity : number = 0;
  err: boolean;
  

  constructor(config: NgbModalConfig, private modalService: NgbModal, private cartService: CartService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    
    
  }
  open(content) {
    this.modalService.open(content, {centered: true});
  }
  increment(){
    this.quantity = this.quantity + 1;
    
    
  }
  decrement(){
    if (this.quantity > 0){
    this.quantity = this.quantity - 1;
    } else {
      setTimeout( ()=> {
        this.err = false;
        this.quantity = 0;
      }, 2000)
      this.err = true;
    }
  }
  saveItem(){
    this.cartService.saveItem(this.item.id, this.quantity).subscribe(data => {
      
      this.modalService.dismissAll();
      alert('Articolo aggiunto al carrello');  
    })
  }

}
