import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass'],
  providers: [UserService],
})
export class LogoutComponent implements OnInit {

  input;

  constructor(@Inject(AppComponent) private parent: AppComponent, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.logout();
  }

  logout() {
    this.userService.logoutUser(this.input).subscribe(
      response => {
        this.parent.login_status = 'Login';
        alert('Logout successfully!');
        this.router.navigate(['/login']);
      },
      error => {
        console.log("error", error);
      }
    );
  }

}
