export interface Company {
  name: string;
  logo: string;
  link: string;
}

export interface Project {
  id: number;
  icon?: string;
  client?: Company;
  employer: Company;
  description: string;
  relevantFacts: string[];
  place: string;
  period: string;
  role: string;
  techs: string[];
}
