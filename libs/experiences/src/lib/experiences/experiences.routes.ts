import { Routes } from '@angular/router';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
import { ExperiencesComponent } from './experiences.component';

export const EXPERIENCES_ROUTES: Routes = [
  {
    path: '',
    component: ExperiencesComponent,
    children: [
      {
        path: ':id',
        component: ExperienceDetailsComponent,
      },
    ],
  },
];
