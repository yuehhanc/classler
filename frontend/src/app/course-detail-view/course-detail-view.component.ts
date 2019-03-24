import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-course-detail-view',
  templateUrl: './course-detail-view.component.html',
  styleUrls: ['./course-detail-view.component.scss'],
  providers: [ApiService],
})
export class CourseDetailViewComponent implements OnInit {

  id = "-1";
  topic = "Data Structure Intro"
  content = "This is a place-holder string for course description"
  link = "https://www.youtube.com/embed/FXoP4ZpJaZY"
  resource_url

  constructor(private api: ApiService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  getVideoUrl = () => {
    this.resource_url = this.sanitizer.bypassSecurityTrustResourceUrl(this.link);
  }

  ngOnInit() {
    this.api.getOneCourse(this.id).subscribe(
      data => {
        this.topic = data.topic;
        this.content = this.sanitizer.bypassSecurityTrustHtml(data.content);
        this.video_rsc = this.sanitizer.bypassSecurityTrustResourceUrl(data.link);
      },
      error => {
        console.log(error);
      }
    )
    this.getVideoUrl()
  }

}
