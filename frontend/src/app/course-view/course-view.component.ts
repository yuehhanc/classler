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
  course_names = ["Data Structure Intro", "topic2", "topic3"]

  constructor(private api: ApiService, private router: Router) {
  }

  // async operation in init instead of constructor so nothing is blocked
  ngOnInit() {
    this.getCourses();
  }

  getCourses = () => {
    this.api.getAllCourses().subscribe(
      data => {
        this.course_names = data;
      },
      error => {
        console.log(error);
      }
    )
  }
}
