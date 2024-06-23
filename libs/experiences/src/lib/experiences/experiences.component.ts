import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { ExperienceCompanyComponent } from './experience-company/experience-company.component';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
import { Project } from './project.model';
import { PROJECTS } from './projects.constant';

@Component({
  selector: 'cv-experiences',
  standalone: true,
  imports: [
    CommonModule,
    MatBottomSheetModule,
    MatIconModule,
    MatListModule,
    ExperienceCompanyComponent,
    ExperienceDetailsComponent,
  ],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencesComponent implements OnInit {
  projects: readonly Project[] = PROJECTS;
  selectedExperience: Project = PROJECTS[0];
  hoveredExperienceId?: number;

  private _isMobile = false;
  private _destroyRef = inject(DestroyRef);

  constructor(
    private readonly _breakpointObserver: BreakpointObserver,
    private readonly _bottomSheet: MatBottomSheet
  ) {}

  ngOnInit(): void {
    this._breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(
        map(
          (state: BreakpointState) =>
            state.breakpoints[Breakpoints.XSmall] ||
            state.breakpoints[Breakpoints.Small]
        ),
        distinctUntilChanged(),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe((isMobile) => (this._isMobile = isMobile));
  }

  selectExperience(project: Project): void {
    this.selectedExperience = project;
    if (this._isMobile) {
      this._bottomSheet.open(ExperienceDetailsComponent, {
        ariaLabel: 'Display experience details',
        data: { project },
        panelClass: 'cv-bottom-sheet',
      });
    }
  }
}
