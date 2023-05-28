import { Project } from '../models/project.model';

export const PROJECTS: readonly Project[] = [
  {
    id: 6,
    icon: 'local_shipping',
    employer: {
      name: 'Shippeo',
      logo: 'assets/logos/shippeo.svg',
      link: 'https://www.shippeo.com/',
    },
    description:
      'Monitoring everything relevant about product transportation for shippers and carriers',
    relevantFacts: [
      'Written technical articles internally and in Medium',
      'Set up Ngrx on the project',
    ],
    place: 'full remote, Paris, FRANCE',
    period: '2022 April ➝ 2022 October',
    roles: ['Senior frontend developer'],
    techs: ['Angular', 'Nx', 'Ngrx', 'Jest'],
  },
  {
    id: 5,
    icon: 'account_balance',
    client: {
      name: 'BPCE Solutions Informatiques',
      logo: 'assets/logos/bpce_si.png',
      link: 'https://www.bpce-si.fr/',
    },
    employer: {
      name: 'Cat-Amania',
      logo: 'assets/logos/cat_amania.svg',
      link: 'https://www.cat-amania.com/',
    },
    description:
      'Gathering and migration of an Ipad native app coupled to an old internal website into a modern Angular web app',
    relevantFacts: [
      'Learnt BEM and css tokens',
      'Developed generic components for design system',
      'Learned full tested development',
      'Mastered Ngxs',
      'Learned Nx monorepo',
      'SAFE agile environment',
    ],
    place: 'Toulouse, FRANCE',
    period: '2021 April ➝ 2022 March',
    roles: ['Senior frontend developer'],
    techs: ['Angular', 'Nx', 'Ngxs', 'Jest'],
  },
  {
    id: 4,
    icon: 'science',
    client: {
      name: 'Sopra Steria',
      logo: 'assets/logos/sopra_steria.svg',
      link: 'https://www.soprasteria.com/',
    },
    employer: {
      name: 'Cat-Amania',
      logo: 'assets/logos/cat_amania.svg',
      link: 'https://www.cat-amania.com/',
    },
    description: 'Internal website redesign and recoding from scratch',
    relevantFacts: [
      'Led full stack developers to improve Angular skills',
      'Responsible of large refactorings',
      'Resolved main performance issues',
      'Implemented infinite scroll combined to virtual scroll',
      'Mastered Angular Material and CDK',
      'Taken frontend technical decisions',
    ],
    place: 'Toulouse, FRANCE',
    period: '2020 August ➝ 2021 March',
    roles: ['Angular tech lead'],
    techs: ['Angular', 'Ngxs', 'Material', 'SpringBoot', 'Java', 'Postgres'],
  },
  {
    id: 3,
    icon: 'glasses',
    employer: {
      name: 'Fare de la lunette',
      logo: 'assets/logos/fare_lunette.svg',
      link: 'http://www.faredelalunette.pf/',
    },
    description:
      'Responsive website whole production for an optician: creation, design, development, delivery and hosting',
    relevantFacts: [
      'Learned how to deliver a web application from A to Z',
      'Project achieved alone',
      'Full responsive application',
      'Designed application using Angular Material',
    ],
    place: `Puna'auia, TAHITI`,
    period: '2020 February ➝ 2020 March',
    roles: ['UI designer', 'Frontend architect', 'Frontend developer'],
    techs: ['Angular', 'Material', 'Digital Ocean'],
  },
  {
    id: 2,
    icon: 'flight',
    client: {
      name: 'Rénodoc',
      logo: 'assets/logos/armee_air.png',
      link: 'https://air.defense.gouv.fr/',
    },
    employer: {
      name: 'Capgemini',
      logo: 'assets/logos/capgemini.svg',
      link: 'https://www.capgemini.com/',
    },
    description:
      'Internal website for storing, managing and accessing technical resources about planes',
    relevantFacts: [
      'Led full stack developers to improve Angular skills',
      'Set up whole project renewal architecture in fresh Angular v2',
      'Responsible for REST and AngularJs/Angular best practices',
    ],
    place: 'Bayonne, FRANCE',
    period: '2015 December ➝ 2020 January',
    roles: ['Full stack developer', 'Angular tech lead'],
    techs: [
      'AngularJs',
      'Angular',
      'Bootstrap',
      'Swagger',
      'Spring',
      'Java',
      'MyBatis',
      'Postgres',
    ],
  },
  {
    id: 1,
    icon: 'agriculture',
    client: {
      name: 'Case New-Holland Iveco',
      logo: 'assets/logos/cnhi.svg',
      link: 'https://www.cnhindustrial.com/',
    },
    employer: {
      name: 'Capgemini',
      logo: 'assets/logos/capgemini.svg',
      link: 'https://www.capgemini.com/',
    },
    description:
      'International internal website for storing, managing and accessing technical resources about vehicles',
    relevantFacts: [
      'Learnt AngularJs best practices guidelines',
      'Set up Google analytics on the application',
    ],
    place: 'Bayonne, FRANCE',
    period: '2015 April ➝ 2015 November',
    roles: ['Full stack developer'],
    techs: ['AngularJs', 'Bootstrap', 'Java', 'Oracle'],
  },
];
