import { $localize } from '@angular/localize/init';
import { Course } from './course.model';

export const COURSES: readonly Course[] = [
  {
    school: {
      label: $localize`EISTI IT Engineering School`,
      logo: 'assets/logos/eisti.png',
      link: 'https://cytech.cyu.fr/',
    },
    label: $localize`Master Degree in IT - Modern web and Cloud computing`,
    period: '2012 ➝ 2015',
  },
  {
    school: {
      label: $localize`Bordeaux 1 University`,
      logo: 'assets/logos/bordeaux1.svg',
      link: 'https://www.u-bordeaux.fr/',
    },
    label: $localize`Master Degree for Research in Fundamental Physics`,
    period: '2006 ➝ 2012',
  },
];
