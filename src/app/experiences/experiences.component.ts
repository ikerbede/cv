import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROJECTS } from '../shared/constants/projects.constant';
import { Project } from '../shared/models/project.model';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';

@Component({
  selector: 'cv-experiences',
  standalone: true,
  imports: [CommonModule, ExperienceDetailsComponent],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencesComponent {
  projects: readonly Project[] = PROJECTS;
  selectedExperience: Project = PROJECTS[0];

  selectExperience(project: Project): void {
    this.selectedExperience = project;
  }
}
