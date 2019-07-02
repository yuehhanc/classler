import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AppComponent } from '../app.component';
import { AuthService } from "angularx-social-login";
declare var FB: any;

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass'],
  providers: [UserService],
})
export class LogoutComponent implements OnInit {

  input;

  constructor(@Inject(AppComponent) private parent: AppComponent, private userService: UserService, private router: Router, private authService: AuthService ) { }

  ngOnInit() {
    this.logout();

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
  }

  logout() {
      
      if (this.parent.login_method === 'GOOGLE' || this.parent.login_method === 'FACEBOOK') {
        var rt = this.router;
        var p = this.parent;
        alert('Logout successfully!');
        p.login_status = 'Login';
        p.login_url = '/login';
        p.login_method = '';
        rt.navigate(['/login']);
        //console.log('Sign out google.');
        this.authService.signOut();
        return;
      }
      this.userService.logoutUser(this.parent.token).subscribe(
        response => {
          this.parent.login_status = 'Login';
          this.parent.login_url = '/login';
          alert('Logout successfully!');
          this.router.navigate(['/login']);
        },
        error => {
          console.log("error", error);
        }
      );


  }

}
