
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ExperienceListComponent } from '../experience-list/experience-list.component';

@Component({
    selector: 'cv-experiences-monitor',
    imports: [
    RouterOutlet,
    MatDividerModule,
    ExperienceListComponent
],
    templateUrl: './experiences-monitor.component.html',
    styleUrl: './experiences-monitor.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperiencesMonitorComponent {
  private readonly _router = inject(Router);
  private readonly _activatedRoute = inject(ActivatedRoute);

  selectExperience(experienceId: number): void {
    this._router.navigate([experienceId], { relativeTo: this._activatedRoute });
  }
}
