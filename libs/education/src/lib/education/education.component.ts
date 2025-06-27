import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Course } from '../course.model';
import { COURSES } from '../courses.constant';

@Component({
    selector: 'cv-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule]
})
export class EducationComponent {
  courses: readonly Course[] = COURSES;
}
