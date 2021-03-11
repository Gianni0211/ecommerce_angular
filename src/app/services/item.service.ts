import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Item} from 'src/app/models/Item';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url : string = 'http://localhost:8080//api/item/all';

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]>{

    return this.http.get<Item[]>(this.url);
  }
}
