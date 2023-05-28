import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AvatarComponent } from '../shared/components/avatar/avatar.component';
import { Course } from './course.model';
import { COURSES } from './courses.constant';

@Component({
  standalone: true,
  selector: 'cv-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, AvatarComponent],
})
export class EducationComponent {
  courses: readonly Course[] = COURSES;
}
