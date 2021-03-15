import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login.service';
import { JwtService } from 'src/app/utils/jwt.service';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faUser = faUser;
   username : string;
   password : string;
   error: boolean;


  constructor(
    private loginService: LoginService,
    private jwtService: JwtService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.error = false;
  }

  login(){
    
    this.loginService.login(this.username, this.password).subscribe(data => {
      let headers = new HttpHeaders();
      headers.set('auth-token', data);
      console.log(headers.getAll('auth-token'));
      
      
      
      this.jwtService.storeJWTToken(data);
      this.router.navigate(['home']);

    },
    (err )=> {
      this.error = true;
    });   
  }
}
