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

  id = -1;

  constructor(private api: ApiService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.sanitizer = sanitizer;
    console.log(this.id);
    this.api.getOneCourse(this.id).subscribe(
      data => {
        this.topic = data.topic;
        this.content = data.content;
        this.link = data.link;
      },
      error => {
        console.log(error);
      }

    )
  }

  getVideoUrl = () => {
    return this.sanitizer.bypassSecurityTrustUrl(this.link);
  }

  ngOnInit() {
  }

}
