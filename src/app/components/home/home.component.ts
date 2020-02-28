import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  technologies = [
    { name: 'HTML5', description: 'Hypertext markup language' },
    { name: 'CSS3', description: 'Cascading Style Sheets' },
    { name: 'JS', description: 'JavaScript' },
    { name: 'TS', description: 'TypeScript' },
    { name: 'AJAX', description: 'Asynchronous JavaScript And XML' },
    { name: 'Bootstrap4', description: 'Twitter bootstrap' },
    { name: 'SASS', description: 'CSS Preprocessor' },
    { name: 'Angular', description: 'TypeScript framework' },
    { name: 'GULP', description: 'Javascript task runner' },
    { name: 'JSON', description: 'JavaScript Object Notation' },
    { name: 'Git', description: 'Distributed Version-Control System'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
