import { Component } from '@angular/core';
import { response } from 'express';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) { }

  login() {
    const userData = {
      emailAddress: this.email,
      password: this.password
    }

    this.userService.loginUser(userData).subscribe(
      response => {

        // Navigate to the home page after successful login
        this.router.navigateByUrl('');
      },
      error => {
        console.error('Login failed', error);
      }
    )
  }
}
