import { animate, style, transition, trigger } from '@angular/animations';

export const displayMainAnimation = trigger('displayMain', [
  transition(':enter', [
    style({
      opacity: 0.5,
      transform: 'scale(0.7)',
    }),
    animate(
      '200ms',
      style({
        opacity: 1,
        transform: 'scale(1)',
      })
    ),
  ]),
  transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
]);
