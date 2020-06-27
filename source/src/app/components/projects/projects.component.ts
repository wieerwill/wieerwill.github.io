import { Component, OnInit } from '@angular/core';

import { PROJECTS } from "./projects";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:any = PROJECTS;

  constructor() { }

  ngOnInit(): void {
  }

}
