import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Item} from 'src/app/models/Item';
import { JwtService } from '../utils/jwt.service';



@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url : string = 'http://localhost:8080//api/item/all';
  

  constructor(private http: HttpClient, private jwtService: JwtService) { }

  getItems(): Observable<Item[]>{
    let token = this.jwtService.retrieveJWTToken();
    
    
    let resp : Observable<Item[]>;
    

    resp = this.http.get<Item[]>(this.url,{headers: { 'auth-token': token}});
    return resp;
  }
}
