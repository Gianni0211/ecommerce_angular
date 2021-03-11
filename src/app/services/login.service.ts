import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = 'http://localhost:8080//api/user/login';

  constructor(private http: HttpClient) { }

  openModal(){

  }
  getUser(username, password){
    let params = new HttpParams();
    params = params.append('username', username);
    params = params.append('password', password); 
       
    return this.http.get(this.url, 
       {params: params}).subscribe(data => {
         console.log(data);
         
       })
  }
}
