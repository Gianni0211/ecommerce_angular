import { Component, OnInit } from '@angular/core';
import { ItemService} from 'src/app/services/item.service';
import { Item} from 'src/app/models/Item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => {
      console.log(items);
      this.items = items;
    })
  }

}
