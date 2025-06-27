import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProgressItem } from './progress-item.model';

@Component({
    selector: 'cv-languages',
    imports: [CommonModule, MatProgressSpinnerModule],
    templateUrl: './languages.component.html',
    styleUrls: ['./languages.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguagesComponent {
  languages: readonly ProgressItem[] = [
    { name: 'French', value: 100 },
    { name: 'English', value: 75 },
    { name: 'Basque', value: 70 },
    { name: 'Spanish', value: 50 },
  ];
}
