import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.scss'],
  providers: [ApiService],
})

export class CourseViewComponent implements OnInit {

  // id should be some sort of hash value created by the backend instead of just number
  courses = [
    {"title": "Time Complexity", "topics": ["Course"]},
    {"title": "Array Intro", "topics": ["Course", "Exercise"]}, 
    {"title": "Array Python", "topics": ["Course", "Exercise"]}, 
    {"title": "Linked List Intro", "topics": ["Course", "Exercise"]}, 
    {"title": "Linked List Python", "topics": ["Course", "Exercise"]}
  ]

  constructor(private api: ApiService, private router: Router) {
  }

  // async operation in init instead of constructor so nothing is blocked
  ngOnInit() {
    this.getCourses();
  }

  getCourses = () => {
    this.api.getAllCourses().subscribe(
      data => {
        this.courses = data;
      },
      error => {
        console.log(error);
      }
    )
  }
}
