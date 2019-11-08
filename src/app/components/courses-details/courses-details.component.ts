import { CoursesService, Courses } from '../education/courses.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.css']
})
export class CoursesDetailsComponent implements OnInit {
  activeCourse: Courses;
  constructor(
    private coursesService: CoursesService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.activeCourse = this.coursesService.getOne(id);
  }
  goBack() {
    this.router.navigate(['/courses']);
  }
}
