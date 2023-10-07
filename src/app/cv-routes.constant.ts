import { Routes } from '@angular/router';

export const CV_ROUTES: Routes = [
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile/profile.component').then((mod) => mod.ProfileComponent),
  },
  {
    path: 'techs',
    loadComponent: () =>
      import('./techs/techs.component').then((mod) => mod.TechsComponent),
  },
  {
    path: 'experiences',
    loadComponent: () =>
      import('./experiences/experiences.component').then(
        (mod) => mod.ExperiencesComponent
      ),
  },
  {
    path: 'publications',
    loadComponent: () =>
      import('./publications/publications.component').then(
        (mod) => mod.PublicationsComponent
      ),
  },
  {
    path: 'education',
    loadComponent: () =>
      import('./education/education.component').then(
        (mod) => mod.EducationComponent
      ),
  },
  {
    path: 'languages',
    loadComponent: () =>
      import('./languages/languages.component').then(
        (mod) => mod.LanguagesComponent
      ),
  },
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
];
