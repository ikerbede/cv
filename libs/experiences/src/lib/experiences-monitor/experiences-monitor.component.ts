import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { Router, RouterOutlet } from '@angular/router';
import { CvRoute } from '@cv/navigation';
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
export class ExperiencesMonitorComponent {
  private readonly _router = inject(Router);

  selectExperience(experienceId: number): void {
    this._router.navigate([CvRoute.Experiences, experienceId]);
  }
}
