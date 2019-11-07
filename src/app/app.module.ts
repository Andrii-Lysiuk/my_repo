import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EducationComponent } from './components/education/education.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CoursesComponent } from './components/education/courses/courses.component';
import { CoursesDetailsComponent } from './components/education/courses-details/courses-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducationComponent,
    PageNotFoundComponent,
    CoursesComponent,
    CoursesDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
