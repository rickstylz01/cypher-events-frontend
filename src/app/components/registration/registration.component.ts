import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) { }

  register() {
    const userData = {
      userName: this.username,
      emailAddress: this.email,
      password: this.password
    };

    this.userService.registerUser(userData).subscribe(
      response => {
        console.log('Registration successfull', response);

        // Navigate to the home page after successful registration
        this.router.navigateByUrl('');
      },
      error => {
        console.error('Registration failed', error);
      }
    )
  }
}
