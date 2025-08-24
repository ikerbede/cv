import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ExperienceDetailsComponent } from '../experience-details/experience-details.component';

@Component({
  imports: [
    MatBottomSheetModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    ExperienceDetailsComponent,
  ],
  selector: 'cv-experience-mobile',
  templateUrl: './experience-mobile.component.html',
  styleUrls: ['./experience-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceMobileComponent {
  private readonly _bottomSheetRef =
    inject<MatBottomSheetRef<ExperienceMobileComponent>>(MatBottomSheetRef);
  readonly experienceId = inject<{ experienceId: number }>(
    MAT_BOTTOM_SHEET_DATA
  ).experienceId;

  goBack(): void {
    this._bottomSheetRef.dismiss();
  }
}
