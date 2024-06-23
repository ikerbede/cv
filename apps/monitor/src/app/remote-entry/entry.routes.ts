import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
      {
        path: 'profile',
        loadComponent: () =>
          import('@cv/profile').then((mod) => mod.ProfileComponent),
      },
      {
        path: 'techs',
        loadComponent: () =>
          import('@cv/techs').then((mod) => mod.TechsComponent),
      },
      {
        path: 'experiences',
        loadComponent: () =>
          import('@cv/experiences').then((mod) => mod.ExperiencesComponent),
      },
      {
        path: 'publications',
        loadComponent: () =>
          import('@cv/publications').then((mod) => mod.PublicationsComponent),
      },
      {
        path: 'education',
        loadComponent: () =>
          import('@cv/education').then((mod) => mod.EducationComponent),
      },
      {
        path: 'languages',
        loadComponent: () =>
          import('@cv/languages').then((mod) => mod.LanguagesComponent),
      },
      { path: '', redirectTo: '/profile', pathMatch: 'full' },
    ],
  },
];
