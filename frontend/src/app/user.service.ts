import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  base_url = 'http://127.0.0.1:8000';

  constructor(private http:HttpClient) { }

  signUp(userData): Observable<any> {
    return this.http.post(this.base_url + '/api/users/', userData);
  }

  loginUser(userData): Observable<any> {
    return this.http.post(this.base_url + '/api/login/', userData);
  }

  logoutUser(userData): Observable<any> {
    return this.http.post(this.base_url + '/api/logout/', userData, { headers: {Authorization: userData} });
  }
}
