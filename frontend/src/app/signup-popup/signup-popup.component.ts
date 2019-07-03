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
  err_msg;;

  constructor(private userService: UserService, private router: Router ) { }

  ngOnInit() {
    this.register = {
      username: '',
      password: '',
      confirm_password: '',
      email: '',
      first_name: '',
      last_name: '',
    };
  }

  validateEmail(mail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mail.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  }

  signUp() {
    if (this.register.password.length < 8) {
      this.err_msg = "Password must be longer than 8 characters.";
      return;
    }
    if (this.register.password != this.register.confirm_password) {
      this.err_msg = "Passwords don't match!";
      return;
    }
    if (!this.validateEmail(this.register.email)) {
      this.err_msg = "Invalid email address!";
      return;
    }
    this.userService.signUp(this.register).subscribe(
      response => {
        alert('Login with your new account!');
        this.router.navigate(['/login']);
      },
      error => {
        this.err_msg = "Username has been taken.";
        console.log("error", error);
      }
    );
  }
}
