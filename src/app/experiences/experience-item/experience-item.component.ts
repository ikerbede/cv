import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Project } from '../../shared/models/project.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'cv-experience-item',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceItemComponent {
  @Input() project!: Project;
}
