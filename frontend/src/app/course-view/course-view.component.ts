import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.scss'],
  providers: [ApiService],
})

export class CourseViewComponent implements OnInit {

  courses = [{topic: "topic1", content: "", link: "/"}];

  constructor(private api:ApiService) {
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

  ngOnInit() {
  }

}
