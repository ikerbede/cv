import { Routes } from '@angular/router';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
import { ExperiencesMonitorComponent } from './experiences-monitor/experiences-monitor.component';

export const EXPERIENCES_MONITOR_ROUTES: Routes = [
  {
    path: '',
    component: ExperiencesMonitorComponent,
    children: [
      {
        path: ':experienceId',
        component: ExperienceDetailsComponent,
      },
    ],
  },
];
