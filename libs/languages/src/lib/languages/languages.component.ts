import { ChangeDetectionStrategy, Component } from '@angular/core';
import { $localize } from '@angular/localize/init';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProgressItem } from './progress-item.model';

@Component({
  selector: 'cv-languages',
  imports: [MatProgressSpinnerModule],
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagesComponent {
  languages: readonly ProgressItem[] = [
    { name: $localize`French`, value: 100 },
    { name: $localize`English`, value: 75 },
    { name: $localize`Basque`, value: 70 },
    { name: $localize`Spanish`, value: 50 },
  ];
}
