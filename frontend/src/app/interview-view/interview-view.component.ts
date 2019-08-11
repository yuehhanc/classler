import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-interview-view',
  templateUrl: './interview-view.component.html',
  styleUrls: ['./interview-view.component.scss'],
  providers: [UserService],
})
export class InterviewViewComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getContent();
  }

  getContent() {
      var user_id = localStorage.getItem('user_id');
      const body = {'user_id': user_id};
      this.userService.getContent(body).subscribe(
        response => {
          var interview_content = document.getElementById("interview_content");
          interview_content.innerHTML = response.content;
        },
        error => {
          console.log('Fail to purchase.');
        }
    );
  }

}
