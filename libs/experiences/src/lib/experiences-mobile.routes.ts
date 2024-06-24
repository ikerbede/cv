import { Routes } from '@angular/router';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';

export const EXPERIENCES_MOBILE_ROUTES: Routes = [
  {
    path: '',
    component: ExperienceListComponent,
  },
  {
    path: ':experienceId',
    component: ExperienceDetailsComponent,
  },
];
