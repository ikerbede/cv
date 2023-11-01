import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { PROJECTS } from '../shared/constants/projects.constant';
import { Project } from '../shared/models/project.model';
import { ExperienceCompanyComponent } from './experience-company/experience-company.component';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'cv-experiences',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    ExperienceCompanyComponent,
    ExperienceDetailsComponent,
  ],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencesComponent {
  projects: readonly Project[] = PROJECTS;
  selectedExperience: Project = PROJECTS[0];
  hoveredExperienceId?: number;

  selectExperience(project: Project): void {
    this.selectedExperience = project;
  }
}
