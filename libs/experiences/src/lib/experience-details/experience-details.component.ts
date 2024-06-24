import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { PROJECTS } from '../projects.constant';

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
  experienceId = input.required<string>();
  experience = computed(() =>
    PROJECTS.find((project) => project.id === Number(this.experienceId()))
  );
}
