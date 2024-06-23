import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'cv-experience-company',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-company.component.html',
  styleUrls: ['./experience-company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceCompanyComponent {
  employerLogo = input.required<string>();
  clientLogo = input<string>();
  color = input<'primary' | 'secondary' | 'tertiary'>('primary');
  width = input(300);
  height = input(300);
}
