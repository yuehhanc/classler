import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  base_url = '';
  csrf_token = this.getCSRFToken();

  constructor(private http:HttpClient) { }

  signUp(userData): Observable<any> {
    //console.log(userData);
    return this.http.post(this.base_url + '/api/users/', userData);
  }

  loginUser(userData): Observable<any> {
    return this.http.post(this.base_url + '/api/login/', userData);
  }

  logoutUser(userData): Observable<any> {
    return this.http.post(this.base_url + '/api/logout/', userData, { headers: {Authorization: userData, 'X-CSRFToken': this.csrf_token} });
  }

  createSocialUser(userData): Observable<any> {
    return this.http.post(this.base_url + '/api/create_social_user/', userData, { headers: {Authorization: userData, 'X-CSRFToken': this.csrf_token} });
  }

  purchase(userData):  Observable<any> {
    console.log(this.csrf_token);
    return this.http.post(this.base_url + '/api/purchase/', userData, { headers: {Authorization: userData, 'X-CSRFToken': this.csrf_token} });
  }

  cancelSubscription(userData):  Observable<any> {
    console.log(this.csrf_token);
    return this.http.post(this.base_url + '/api/cancelSubscription/', userData, { headers: {Authorization: userData, 'X-CSRFToken': this.getCSRFToken()} });
  }

  getContent(userData): Observable<any> {
    return this.http.post(this.base_url + '/api/getContent/', userData);
  }

  getCSRFToken() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        if (cookies[i].startsWith("csrftoken=")) {
            return cookies[i].substring("csrftoken=".length, cookies[i].length);
        }
    }
    return "unknown";
  }
}

