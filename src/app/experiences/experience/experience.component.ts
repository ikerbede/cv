import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Project } from '../../shared/models/project.model';
import { ExperienceCompanyComponent } from '../experience-company/experience-company.component';
import { ExperienceDetailsComponent } from '../experience-details/experience-details.component';
import { ExperienceMainComponent } from '../experience-main/experience-main.component';
import { displayMainAnimation } from './experience.animations';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    ExperienceCompanyComponent,
    ExperienceDetailsComponent,
    ExperienceMainComponent,
  ],
  selector: 'cv-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [displayMainAnimation],
})
export class ExperienceComponent {
  @Input() project!: Project;
  @Input() position: 'left' | 'center' | 'right' = 'center';
  @Input() showMain = false;
  @Output() focused = new EventEmitter<boolean>();

  mainTop = 0;
  mainLeft = 0;

  private timeoutMain!: NodeJS.Timeout;

  constructor(private readonly dialog: MatDialog) {}

  onMouseEnter(event: Event): void {
    this.timeoutMain = setTimeout(() => {
      const companyElt = event.target as HTMLElement;
      this.mainTop = companyElt.offsetTop - 100;
      this.mainLeft = companyElt.offsetLeft;
      if (this.position === 'center') {
        this.mainLeft -= 75;
      } else if (this.position === 'right') {
        this.mainLeft -= 150;
      }
      this.focused.emit(true);
    }, 500);
  }

  onMouseLeave(origin: 'company' | 'main'): void {
    if (origin === 'company' && !this.showMain) {
      clearTimeout(this.timeoutMain);
    } else if (origin === 'main' && this.showMain) {
      clearTimeout(this.timeoutMain);
      this.focused.emit(false);
    }
  }

  displayDetails(): void {
    this.dialog.open(ExperienceDetailsComponent, {
      data: { project: this.project },
      panelClass: 'cv-dialog',
    });
    this.onMouseLeave('main');
  }
}
