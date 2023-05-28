import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, map, distinctUntilChanged, shareReplay } from 'rxjs';
import { PROJECTS } from '../shared/constants/projects.constant';
import { Project } from '../shared/models/project.model';
import { ExperienceMobileComponent } from './experience-mobile/experience-mobile.component';
import { ExperienceComponent } from './experience/experience.component';

@Component({
  selector: 'cv-experiences',
  standalone: true,
  imports: [CommonModule, ExperienceComponent, ExperienceMobileComponent],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencesComponent {
  projects: readonly Project[] = PROJECTS;
  focusedProject = 0;
  isMobile$: Observable<boolean>;

  constructor(private readonly breakpointObserver: BreakpointObserver) {
    this.isMobile$ = this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(
        map(
          (state: BreakpointState) =>
            state.breakpoints[Breakpoints.XSmall] ||
            state.breakpoints[Breakpoints.Small]
        ),
        distinctUntilChanged(),
        shareReplay(1)
      );
  }

  displayMainInfos(isFocused: boolean, projectId: number): void {
    if (isFocused) {
      this.focusedProject = projectId;
    } else if (this.focusedProject === projectId) {
      this.focusedProject = 0;
    }
  }
}
