import { Component, OnInit } from '@angular/core';
import { ProblemObj, ProblemInfo } from '../problem';
import { ProblemService } from '../problem.service';

@Component({
  selector: 'app-problem-view',
  templateUrl: './problem-view.component.html',
  styleUrls: ['./problem-view.component.scss']
})
export class ProblemViewComponent implements OnInit {

  searchStr: string;
  allProblems: ProblemInfo[];
  selectedProblems: ProblemInfo[];
  noMatched: boolean;
  intro=
`
## Classic 100

We pick 100 most representative problems that covers all sorts of stuffs you should know about technical interview questions. The problems are ordered by their difficulty, and we provide detail text/video solution for every problem. After finishing all the problems here, you will have sufficient knowledge to handle most of the interview questions.

Since these 100 problems include every topics that are related to data structure and algorithm, it is recommended to first take our intro courses or other ds/algo courses you like if you have little understandings about them.
`



  constructor(private problemService: ProblemService) { }

  ngOnInit() {
    this.problemService.getProblemInfos()
      .subscribe(infos => this.allProblems = this.selectedProblems = infos);
    this.searchStr = "";
  }

  onSelect(subtopic: string): void {

  }

  onKey(event: KeyboardEvent) {
    this.searchStr = (<HTMLInputElement>event.target).value.toLowerCase();

    if (this.searchStr != "") {
      this.selectedProblems = [];
      for (let i in this.allProblems) {
        if (this.allProblems[i].name.toLowerCase().match(this.searchStr) || this.allProblems[i].id.toString().startsWith(this.searchStr)) {
          this.selectedProblems.push(this.allProblems[i]);
        }
      }
    }
    else {
      this.selectedProblems = this.allProblems;
    }
    this.noMatched = this.selectedProblems.length == 0;
  }
}
