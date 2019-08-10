import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../user.service';
import { AppComponent } from '../app.component';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { Router } from '@angular/router';
declare var FB: any;

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss'],
  providers: [UserService],
})
export class LoginPopupComponent implements OnInit {

  input;
  err_msg;

  private user: SocialUser;
  private loggedIn: boolean;

  constructor(@Inject(AppComponent) private parent: AppComponent, private userService: UserService, private router: Router, private authService: AuthService ) { }

  ngOnInit() {
    this.input = {
      username: '',
      password: '',
    };
    this.err_msg = '';

    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '416373542290600',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    // You may want to store these info into cookies or sessions to fix "Page change = lose data issue"
    console.log(this.parent.login_status);
    if (this.parent.login_status === 'Logout') {
      this.router.navigate(['/']);
    }
  }

  login() {
    var p = this.parent;
    this.userService.loginUser(this.input).subscribe(
      response => {
        console.log(response);
        p.login_status = 'Logout';
        p.login_url = '/logout';
        p.token = 'Token ' + response.token;
        p.user_id = response.user_id;
        var inputArea = document.getElementById("inputArea");
        inputArea.innerHTML = 'Welcome, ' + this.input.username + '!';
      },
      error => {
        console.log("error", error);
        this.err_msg = 'Invalid username or password!';
      }
    );
  }

  fb_login(){
    // For unknown reasons, 'this' won't work in FB API calls...
    var p = this.parent;
    FB.login((response)=>
        {
            if (response.authResponse)
            {
                console.log(response.authResponse);
                p.login_status = 'Logout';
                p.login_url = '/logout';
                p.token = 'Token ' + response.authResponse.accessToken;
                console.log("token:" + p.token);
                console.log("User ID: " + response.authResponse.userID);
                p.login_method='FACEBOOK';
                var inputArea = document.getElementById("inputArea");

                FB.api('/me', function(response) {
                  inputArea.innerHTML = 'Welcome, ' + response.name + '!';
                });
            }
            else
            {
                console.log('User login failed');
            }
      });

  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.verify_login_state("GOOGLE");
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.create_social_user(user);
      console.log(this.user);
    });

  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.verify_login_state("FACEBOOK");
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.create_social_user(user);
      console.log(this.user);
    });
  } 

  signOut(): void {
    this.authService.signOut();
  }

  verify_login_state(login_method) {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if (this.loggedIn === true) {
        this.parent.login_status = 'Logout';
        this.parent.login_url = '/logout';
        this.parent.login_method = login_method;
        var inputArea = document.getElementById("inputArea");
        inputArea.innerHTML = 'Welcome, ' + this.user.name + '!';
      }
    });
  }

  create_social_user(user) {
    const body = {'user': user};
    this.userService.createSocialUser(body).subscribe(
      response => {
        //console.log('Register with Social User successfully!');
        this.parent.user_id = response.user_id;
      },
      error => {
        console.log('Fail to create a user.');
      }
    );
  }

  purchase() {
      alert(this.parent.user_id);
      const body = {'user_id': this.parent.user_id};
      this.userService.purchase(body).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log('Fail to purchase.');
        }
    );
  }

}
