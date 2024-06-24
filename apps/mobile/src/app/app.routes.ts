import { Route } from '@angular/router';
import { CvRoute } from '@cv/navigation';

export const appRoutes: Route[] = [
  {
    path: CvRoute.Profile,
    loadComponent: () =>
      import('@cv/profile').then((mod) => mod.ProfileComponent),
  },
  {
    path: CvRoute.Techs,
    loadComponent: () => import('@cv/techs').then((mod) => mod.TechsComponent),
  },
  {
    path: CvRoute.Experiences,
    loadChildren: () =>
      import('@cv/experiences').then((mod) => mod.EXPERIENCES_MOBILE_ROUTES),
  },
  {
    path: CvRoute.Publications,
    loadComponent: () =>
      import('@cv/publications').then((mod) => mod.PublicationsComponent),
  },
  {
    path: CvRoute.Education,
    loadComponent: () =>
      import('@cv/education').then((mod) => mod.EducationComponent),
  },
  {
    path: CvRoute.Languages,
    loadComponent: () =>
      import('@cv/languages').then((mod) => mod.LanguagesComponent),
  },
  { path: '', redirectTo: `/${CvRoute.Profile}`, pathMatch: 'full' },
];
