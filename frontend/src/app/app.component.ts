import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Classler';
  login_status = '';
  login_url = '';
  token;
  login_method = '';
  user_id;

  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit() {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });


    // Might need to use cookie or session
    if (this.loggedIn) {
        this.login_status = 'Logout';
        this.login_url = '/logout';
        this.login_method = this.user.provider;
        var inputArea = document.getElementById("inputArea");
        inputArea.innerHTML = 'Welcome, ' + this.user.name + '!';
    } else {
      this.login_status = 'Login';
      this.login_url = '/login';
    }

    //this.login_status = 'Login';
    //this.login_url = '/login';
  }
}
