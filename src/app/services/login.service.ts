import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable} from 'rxjs';
import { User } from 'src/app/models/User';




@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = 'http://localhost:8080//api/user/login';


  constructor(private http: HttpClient) { }

  
  login(username: string, password: string ): Observable<any>{
    let resp: Observable<any>;
    let params = new HttpParams()
    .set('username', username)
    .set('password', password); 
    
      
    resp = this.http.post(this.url, null,
      {params: params, responseType: 'text'});
      return resp;
  }
}
