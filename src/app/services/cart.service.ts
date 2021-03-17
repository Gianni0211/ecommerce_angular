import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtService } from '../utils/jwt.service';
import { Cart } from 'src/app/models/Cart';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url : string = 'http://localhost:8080//api/cart/save';
  urlGet : string = 'http://localhost:8080//api/cart/get';
  quantity: number;
  itemId: number;
  subject = new Subject<any>();
  

  constructor(private http: HttpClient, private jwtService: JwtService) { }

  saveItem(itemId, quantity){
    let token = this.jwtService.retrieveJWTToken();

    
    let respBody = {
      headers: {'auth-token': token}, 
      params: { 'qnt': quantity, 'item-id': itemId}};

    return this.http.post(this.url, null,respBody );
    
  }
  getCart(): Observable<Cart>{
    let token = this.jwtService.retrieveJWTToken();
    let resp: Observable<Cart>;

    resp = this.http.get<Cart>(this.urlGet,{headers: { 'auth-token': token}});
    return resp;
  }
  sendClickEvent(){
    this.subject.next();
  }
  getClickEvent(){
    return this.subject.asObservable();
  }
  
 
}
