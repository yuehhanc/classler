import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-popup',
  templateUrl: './signup-popup.component.html',
  styleUrls: ['./signup-popup.component.scss'],
  providers: [UserService],
})
export class SignupPopupComponent implements OnInit {

  register;

  constructor(private userService: UserService, private router: Router ) { }

  ngOnInit() {
    this.register = {
      username: '',
      password: '',
      email: '',
    };
  }

  signUp() {
    this.userService.signUp(this.register).subscribe(
      response => {
        alert('Login with your new account!');
        this.router.navigate(['/login']);
      },
      error => {
        console.log("error", error);
      }
    );
  }

}
