import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  input,
} from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import {
  Observable,
  distinctUntilChanged,
  fromEvent,
  map,
  startWith,
} from 'rxjs';
import { ExperienceCompanyComponent } from '../experience-company/experience-company.component';
import { ExperienceDetailsComponent } from '../experience-details/experience-details.component';
import { Project } from '../project.model';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    ExperienceCompanyComponent,
    ExperienceDetailsComponent,
  ],
  selector: 'cv-experience-mobile',
  templateUrl: './experience-mobile.component.html',
  styleUrls: ['./experience-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceMobileComponent implements OnInit {
  project = input.required<Project>();

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
      data: { project: this.project() },
      panelClass: 'cv-bottom-sheet',
    });
  }
}
