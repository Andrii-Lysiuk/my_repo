import { CoursesService } from './courses.service';
import { EducationRoutingModule } from './education.routing.module';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CoursesComponent } from './courses/courses.component';
import { EducationComponent } from './education.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    EducationComponent,
    CoursesDetailsComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    EducationRoutingModule
  ],
  providers: [CoursesService]
})
export class EducationModule { }
