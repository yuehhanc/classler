import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup-popup',
  templateUrl: './signup-popup.component.html',
  styleUrls: ['./signup-popup.component.scss'],
  providers: [UserService],
})
export class SignupPopupComponent implements OnInit {

  register;

  constructor(private userService: UserService ) { }

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
        alert('User has been created!');
      },
      error => {
        console.log("error", error);
      }
    );
  }

}
