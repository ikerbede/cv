import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import {
  distinctUntilChanged,
  fromEvent,
  map,
  Observable,
  startWith,
} from 'rxjs';
import { Project } from '../../shared/models/project.model';
import { ExperienceCompanyComponent } from '../experience-company/experience-company.component';
import { ExperienceDetailsComponent } from '../experience-details/experience-details.component';
import { ExperienceMainComponent } from '../experience-main/experience-main.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    ExperienceCompanyComponent,
    ExperienceDetailsComponent,
    ExperienceMainComponent,
  ],
  selector: 'cv-experience-mobile',
  templateUrl: './experience-mobile.component.html',
  styleUrls: ['./experience-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceMobileComponent implements OnInit {
  @Input() project!: Project;

  width$!: Observable<number>;

  constructor(private readonly bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {
    this.width$ = fromEvent(window, 'resize').pipe(
      startWith(undefined),
      map(() => Math.round(window.innerWidth * 0.25)),
      distinctUntilChanged()
    );
  }

  displayDetails(): void {
    this.bottomSheet.open(ExperienceDetailsComponent, {
      data: { project: this.project },
      panelClass: 'cv-bottom-sheet',
    });
  }
}
