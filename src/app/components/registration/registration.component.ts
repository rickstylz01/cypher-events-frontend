import { Component } from '@angular/core';
import { error } from 'console';
import { response } from 'express';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private userService: UserService) { }

  register() {
    const userData = {
      userName: this.username,
      emailAddress: this.email,
      password: this.password
    };

    this.userService.registerUser(userData).subscribe(
      response => {
        console.log('Registration successfull', response);
      },
      error => {
        console.error('Registration failed', error);
      }
    )
  }
}
