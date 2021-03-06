import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { ProblemObj } from '../problem';
import { ProblemService } from '../problem.service';
import { CodeSubmissionService } from '../code-submission.service';

@Component({
  selector: 'app-problem-detail-view',
  templateUrl: './problem-detail-view.component.html',
  styleUrls: ['./problem-detail-view.component.scss']
})
export class ProblemDetailViewComponent implements OnInit {

  selectedProblem: ProblemObj;

  readOnly = false;
  mode = 'python';
  options: any = {
    lineNumbers: true,
    mode: 'python',
    indentUnit: 4,
    smartIndent: true,
    theme: 'material',
    indentWithTabs: true,
    tabSize: 4,
    value: "def two_sum(nums, target):\n",
  };

  userCode = '';
  submitResult = '';
  
  constructor(
    private route: ActivatedRoute,
    private problemService: ProblemService,
    private codeSubmissionService: CodeSubmissionService
  ) { }

  ngOnInit(): void {
    this.getProblem();
    this.userCode = this.options.value;
  }

  getProblem(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.problemService.getProblem(name)
      .subscribe(item => this.selectedProblem = item);
  }

  submit(): void {
    //console.log('User Code: \n' + this.userCode);
    var user_id = localStorage.getItem('user_id');
    const name = this.route.snapshot.paramMap.get('name');
    this.codeSubmissionService.submit(name, this.userCode, user_id)
      .subscribe(item => this.submitResult = item);
  }

  handleChange($event) {
    this.userCode = $event;
  }
}
