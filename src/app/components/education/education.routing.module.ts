import { EducationComponent } from './education.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CoursesComponent } from './courses/courses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

const educationRoutes: Routes = [
  {
    path: 'education', component: EducationComponent, children: [
      { path: 'courses', component: CoursesComponent },
      { path: 'courses/:id', component: CoursesDetailsComponent },
    ]
  },
  
];


@NgModule({
  imports: [RouterModule.forChild(educationRoutes)],
  exports: [RouterModule]
})
export class EducationRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['/error']);
    }
  }
}
