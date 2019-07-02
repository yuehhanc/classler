import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import 'codemirror/mode/python/python';

import { CourseViewComponent } from './course-view/course-view.component';
import { ProblemViewComponent } from './problem-view/problem-view.component';
import { InterviewViewComponent } from './interview-view/interview-view.component';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import { SignupPopupComponent } from './signup-popup/signup-popup.component';
import { AdsViewComponent } from './ads-view/ads-view.component';
import { ProblemDetailViewComponent } from './problem-detail-view/problem-detail-view.component';

import { CourseService } from './course.service';
import { ProblemService } from './problem.service';
import { CodeSubmissionService } from './code-submission.service';
import { UserService } from './user.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseDetailViewComponent } from './course-detail-view/course-detail-view.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AngularSplitModule } from 'angular-split';
import { MarkdownModule } from 'ngx-markdown';
import { MatTabsModule } from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import { LogoutComponent } from './logout/logout.component';

//Google login
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("292126628689-8l0q40patlqbvp02nr566dk22qmud4p0.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("416373542290600")
  }
]);
 
export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    AdsViewComponent,
    CourseViewComponent,
    InterviewViewComponent,
    ProblemViewComponent,
    SignupPopupComponent,
    LoginPopupComponent,
    ProblemDetailViewComponent,
    CourseDetailViewComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CodemirrorModule,
    HttpClientModule,
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    AngularSplitModule.forRoot(),
    MarkdownModule.forRoot(),
    MatTabsModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    NoopAnimationsModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatInputModule,
    MatSidenavModule,
    SocialLoginModule,
  ],
  providers: [
    CourseService, 
    ProblemService, 
    CodeSubmissionService,
    UserService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
