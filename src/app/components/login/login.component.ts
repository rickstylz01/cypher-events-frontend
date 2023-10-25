import { Component } from '@angular/core';
import { response } from 'express';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // may need to change to emailaddress
  username: string = '';
  password: string = '';

  constructor(private userService: UserService) { }

  login() {
    const userData = {
      // may need to change to emailaddress
      userName: this.username,
      password: this.password
    }

    this.userService.loginUser(userData).subscribe(
      response => {
        console.log('Login successfull', response);
      },
      error => {
        console.error('Login failed', error);
      }
    )
  }
}
