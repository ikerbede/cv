import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { PROJECTS } from '../../shared/constants/projects.constant';
import { Project } from '../../shared/models/project.model';

@Component({
  selector: 'cv-experience-details',
  standalone: true,
  imports: [
    CommonModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceDetailsComponent {
  @Input() experience: Project = PROJECTS[0];
}
