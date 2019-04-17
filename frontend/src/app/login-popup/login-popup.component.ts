import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../user.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss'],
  providers: [UserService],
})
export class LoginPopupComponent implements OnInit {

  input;
  err_msg;

  constructor(@Inject(AppComponent) private parent: AppComponent, private userService: UserService ) { }

  ngOnInit() {
    this.input = {
      username: '',
      password: '',
    };
    this.err_msg = '';
  }

  login() {
    this.userService.loginUser(this.input).subscribe(
      response => {
        this.parent.login_status = 'Logout';
        this.parent.login_url = '/logout';
        this.parent.token = 'Token ' + response.token;
        var inputArea = document.getElementById("inputArea");
        inputArea.innerHTML = 'Welcome, ' + this.input.username + '!';
      },
      error => {
        console.log("error", error);
        this.err_msg = 'Invalid username or password!';
      }
    );
  }

}
