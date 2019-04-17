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

  constructor(@Inject(AppComponent) private parent: AppComponent, private userService: UserService ) { }

  ngOnInit() {
    this.input = {
      username: '',
      password: '',
    };
  }

  login() {
    this.userService.loginUser(this.input).subscribe(
      response => {
        console.log(response);
        this.parent.login_status = 'Logout';
        this.parent.login_url = '/logout';
        var inputArea = document.getElementById("inputArea");
        inputArea.innerHTML = 'Welcome, ' + this.input.username + '!';
      },
      error => {
        console.log("error", error);
      }
    );
  }

}
