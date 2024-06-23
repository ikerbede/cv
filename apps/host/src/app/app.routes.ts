import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'monitor',
    loadChildren: () => import('monitor/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'mobile',
    loadChildren: () => import('mobile/Routes').then((m) => m.remoteRoutes),
  },
];
