import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Optional,
} from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../../shared/models/project.model';

@Component({
  selector: 'cv-experience-details',
  standalone: true,
  imports: [
    CommonModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceDetailsComponent {
  data: { project: Project };

  constructor(
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    private dialogData: { project: Project },
    @Optional()
    @Inject(MAT_BOTTOM_SHEET_DATA)
    private bottomsheetData: { project: Project }
  ) {
    this.data = this.dialogData || this.bottomsheetData;
  }
}
