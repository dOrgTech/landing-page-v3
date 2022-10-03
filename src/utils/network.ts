import { HireUsSelectForms } from "../constants/hireUs";
import { JoinUsSelectForms } from "../constants/joinUs";

export interface HireUsFormInputs {
  organization: string;
  name: string;
  email: string;
  website: string;
  project_categories: HireUsSelectForms["categories"][];
  approach: HireUsSelectForms["approaches"][];
  project_description: string;
  budget: string;
  start_date: string;
  source: string;
}

export interface JoinUsFormInputs {
  name: string;
  email: string;
  main_specialization: string;
  years_experience: string;
  other_specializations: JoinUsSelectForms["specializations"][];
  technologies: JoinUsSelectForms["technologies"][];
  crypto_experience: string;
  availability: string;
  interest: string;
  github: string;
  linkedIn: string;
  twitter: string;
  discord: string;
  hear_about: string;
}
