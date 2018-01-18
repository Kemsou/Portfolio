import { Injectable } from '@angular/core';
import { Project } from './project';

import { PROJECTS } from './mock-projects';

@Injectable()
export class ProjectService {

  constructor() { }

  getProjects(): Project[] {
    return PROJECTS;
  }

  getProject(id: number): Project{
    return of(PROJECTS.find(project => project.id === id));
  }

}
