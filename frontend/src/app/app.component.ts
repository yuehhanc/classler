import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit() {
    this.login_status = 'Login';
    this.login_url = '/login';
  }
}
