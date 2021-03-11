import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faUser = faUser;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  loginUser(event){
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector("#username").value;
    const password = target.querySelector("#password").value;
    this.loginService.getUser(username, password);
    
    
  }
}
