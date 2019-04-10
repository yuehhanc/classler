import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CourseViewComponent } from './course-view/course-view.component';
import { ProblemViewComponent } from './problem-view/problem-view.component';
import { ProblemDetailViewComponent } from './problem-detail-view/problem-detail-view.component';
import { InterviewViewComponent } from './interview-view/interview-view.component';
import { AdsViewComponent } from './ads-view/ads-view.component';
import { CourseDetailViewComponent } from './course-detail-view/course-detail-view.component';

const routes: Routes = [
  { path: 'courses', component: CourseViewComponent,
    children: [
      {path: '', redirectTo: 'Lecture Intro/', pathMatch: 'full' },
      {path: ':id/:topic', component: CourseDetailViewComponent},
    ]},
  { path: 'problems', component: ProblemViewComponent },
  { path: '', component: AdsViewComponent },
  { path: 'interview', component: InterviewViewComponent },
  { path: 'problems/:name', component: ProblemDetailViewComponent},
  // { path: 'courses', component:AdsViewComponent, outlet:"sidebar"},
  // { path: 'courses/:id', component:CourseDetailViewComponent},
];
 

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ] 
})
export class AppRoutingModule {}