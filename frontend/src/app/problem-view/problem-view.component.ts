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
