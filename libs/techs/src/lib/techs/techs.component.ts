import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TECHS } from './techs.constant';

@Component({
  standalone: true,
  selector: 'cv-techs',
  templateUrl: './techs.component.html',
  styleUrls: ['./techs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressBarModule,
    MatToolbarModule,
  ],
})
export class TechsComponent {
  techs = TECHS;
}
