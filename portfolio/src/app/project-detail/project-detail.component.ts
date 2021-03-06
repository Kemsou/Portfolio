import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProjectService }  from '../project.service';
import { Project } from '../project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})


export class ProjectDetailComponent implements OnInit {

@Input() project: Project;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  getProjecs(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.project = this.projectService.getProject(id);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getProjecs()
  }

}
