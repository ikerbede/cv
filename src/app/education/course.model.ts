export interface School {
  label: string;
  logo: string;
  link: string;
}

export interface Course {
  school: School;
  label: string;
  period: string;
}
