import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtService } from '../utils/jwt.service';
import { Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url: string = 'http://localhost:8080//api/order/save';
  subject = new Subject<any>();
  

  constructor(private jwtService: JwtService, private http: HttpClient) { }
  saveOrder(){
    let token = this.jwtService.retrieveJWTToken();

    return this.http.post(this.url, null, {headers: {'auth-token': token}} );

  }
  sendClickEvent(){
    this.subject.next();
  }
  getClickEvent(){
    return this.subject.asObservable();
  }
  
}
