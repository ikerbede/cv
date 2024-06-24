import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { RouterOutlet } from '@angular/router';
import { ExperienceListComponent } from '../experience-list/experience-list.component';

@Component({
  selector: 'cv-experiences-monitor',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatDividerModule,
    ExperienceListComponent,
  ],
  templateUrl: './experiences-monitor.component.html',
  styleUrl: './experiences-monitor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencesMonitorComponent {}
