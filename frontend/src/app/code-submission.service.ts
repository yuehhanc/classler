import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class CodeSubmissionService {

  baseUrl = "/classler/";
  httpHeaders = new HttpHeaders({"Content-Type": "application/json"});

  constructor(private http: HttpClient, ) { }


  submit(problem_name: string, code_str: string, user_id: string): Observable<any> {
    const body = {name: problem_name, code: code_str, uid: user_id};
    console.log(body);
    return this.http.post(this.baseUrl + "problems/" + problem_name + "/code-submit", body, {headers: this.httpHeaders});  
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    console.log(`Code Submission Service: ${message}`);
  }
}
