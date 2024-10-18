export type School = {
  label: string;
  logo: string;
  link: string;
};

export type Course = {
  school: School;
  label: string;
  period: string;
};
