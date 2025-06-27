
import {
  ChangeDetectionStrategy,
  Component,
  output,
  signal,
} from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ExperienceCompanyComponent } from '../experience-company/experience-company.component';
import { Project } from '../project.model';
import { PROJECTS } from '../projects.constant';

@Component({
    selector: 'cv-experience-list',
    imports: [
    MatBottomSheetModule,
    MatIconModule,
    MatListModule,
    ExperienceCompanyComponent
],
    templateUrl: './experience-list.component.html',
    styleUrl: './experience-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceListComponent {
  projects: readonly Project[] = PROJECTS;
  hoveredExperienceId = signal(-1);
  selected = output<number>();

  selectExperience(project: Project): void {
    this.selected.emit(project.id);
  }
}
