import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-row',
  templateUrl: './cart-row.component.html',
  styleUrls: ['./cart-row.component.css']
})
export class CartRowComponent implements OnInit {
  @Input() det: any;

  constructor() { }

  ngOnInit(): void {
   
  }
}


