import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../../shared/models/project.model';

@Component({
  selector: 'cv-experience-main',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatChipsModule, MatIconModule],
  templateUrl: './experience-main.component.html',
  styleUrls: ['./experience-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceMainComponent {
  @Input() project!: Project;
  @Output() expand = new EventEmitter<void>();

  more(): void {
    this.expand.emit();
  }
}
