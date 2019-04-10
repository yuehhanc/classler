import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ads-view',
  templateUrl: './ads-view.component.html',
  styleUrls: ['./ads-view.component.scss']
})
export class AdsViewComponent implements OnInit {
  content=`
# Classler: An end-to-end platform that helps people prepare for software engineer job findings.

### The elements to successful software engineer job findings are:

1. Resume - (Resume checking)
2. Data strucutre and algorithms - (Lecture/problem)
3. Interview skills - (Mock interviews)

### This platform is intended to provide end-to-end service for people who needs help with finding software engineer related jobs. Our end-to-end services mainly target (ordered by importance):

1. Non-CS major students looking for software engineer related jobs
2. Non-CS working professional seeking to find software related jobs
3. College students looking for software engineer related internships
4. CS major students/professionals looking for a website to refresh their knowledge.

### Our products include:

1. Resume checking.
2. Data structure and algorithm courses that are more aligned with the need of software interviews
3. Problems that show up frequently in software interviews with detailed solutions
4. Interview practice.

After using our products, people are expected to acquire everything they need to know about finding software engineer related jobs. 

### Some good to have elements we may consider to add in the future includes:

1. Cooperation with companies
2. Company problems tag
3. Personal tutor/planing
`
  constructor() { }

  ngOnInit() {
  }

}
