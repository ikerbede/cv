
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TECHS } from './techs.constant';

@Component({
    selector: 'cv-techs',
    templateUrl: './techs.component.html',
    styleUrls: ['./techs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
    MatIconModule,
    MatProgressBarModule,
    MatToolbarModule
]
})
export class TechsComponent {
  techs = TECHS;
}
