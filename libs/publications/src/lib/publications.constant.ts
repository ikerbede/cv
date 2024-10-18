import { Publication } from './publication.model';

export const PUBLICATIONS_MEDIUM: readonly Publication[] = [
  {
    title:
      'Make your Angular forms robust and reusable using ControlValueAccessor',
    description:
      'The goal of this article is to show a clean way to code a reusable form section, as it could be shared by the design system of your organisation for example',
    url: 'https://medium.com/@iker.bedecarrax/make-your-angular-forms-robust-and-reusable-using-controlvalueaccessor-d3c23e8bdf7',
    date: new Date('2023-01-26'),
    imageUrl: 'assets/wallpapers/puzzle.jpeg',
  },
  {
    title: 'Implementing state management in an Angular complex app',
    description:
      'This article explains what is a state manager, how does it work and why should complex applications use it',
    url: 'https://medium.com/shippeo-tech-blog/implementing-state-management-in-an-angular-complex-app-a613ebe76c5d',
    date: new Date('2022-10-27'),
    imageUrl: 'assets/wallpapers/library.jpeg',
  },
];
