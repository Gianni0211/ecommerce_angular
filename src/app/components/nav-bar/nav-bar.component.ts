import { Component, OnInit } from '@angular/core';
import { faCashRegister, faUser } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/User';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  
  faCashRegister = faCashRegister;
  faUser = faUser;
  user: User;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    
  }

}
