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

  baseUrl = "http://127.0.0.1:8000/classler/";
  httpHeaders = new HttpHeaders({"Content-Type": "application/json"});

  constructor(private http: HttpClient, ) { }


  submit(problem_name: string, code_str: string): Observable<any> {
    const body = {name: problem_name, code: code_str};
    return this.http.post(this.baseUrl + "problems/" + problem_name + "/code-submit", body, {headers: this.httpHeaders});  
  }

  //submit(problem_name: string, code_str: string): Observable<string> {
  //  const submissionUrl = 'problems/' + problem_name + '/code-submit';
  //  return this.http.post<string>(submissionUrl, code_str, httpOptions).pipe(
  //    tap((result_str: string) => this.log(`my result: str=${result_str}`)),
  //    catchError(this.handleError<string>('submit'))
  //  );
  //}

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
