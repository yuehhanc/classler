import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProblemObj, ProblemInfo } from './problem';
import { MOCKPROBLEMS } from './mock-problem';

@Injectable({
  providedIn: 'root'
})
export class ProblemService {

  constructor() { }
  getProblemInfos(): Observable<ProblemInfo[]> {
    return of(MOCKPROBLEMS.map(function (el) { return el.info; }));
  }
  getProblem(name:string): Observable<ProblemObj> {
    return of(MOCKPROBLEMS.find(item => item.info.name === name));
  }
}
