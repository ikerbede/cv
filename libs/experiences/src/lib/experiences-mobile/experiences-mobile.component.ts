import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { CvRoute } from '@cv/navigation';
import { ExperienceListComponent } from '../experience-list/experience-list.component';
import { ExperienceMobileComponent } from '../experience-mobile/experience-mobile.component';

@Component({
  standalone: true,
  imports: [CommonModule, MatBottomSheetModule, ExperienceListComponent],
  selector: 'cv-experiences-mobile',
  templateUrl: './experiences-mobile.component.html',
  styleUrls: ['./experiences-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencesMobileComponent {
  experienceId = input.required<string>();
  readonly cvRoutesEnum = CvRoute;

  private readonly _bottomSheet = inject(MatBottomSheet);

  selectExperience(experienceId: number): void {
    this._bottomSheet.open(ExperienceMobileComponent, {
      data: { experienceId },
      panelClass: 'cv-bottom-sheet',
    });
  }
}
