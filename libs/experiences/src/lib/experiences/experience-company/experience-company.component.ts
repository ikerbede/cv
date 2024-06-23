import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'cv-experience-company',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-company.component.html',
  styleUrls: ['./experience-company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceCompanyComponent implements OnInit, OnChanges {
  @Input() employerLogo!: string;
  @Input() clientLogo?: string;
  @Input() color: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() width = 300;
  @Input() height = 300;

  @HostBinding('style.width') hostWidth!: string;
  @HostBinding('style.height') hostHeight!: string;

  ngOnInit(): void {
    this.hostHeight = `${this.height}px`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['width']) {
      this.hostWidth = `${this.width}px`;
    }
  }
}
