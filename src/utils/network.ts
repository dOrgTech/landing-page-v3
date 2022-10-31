import { HireSelectForms } from "../constants/hire";
import { JoinSelectForms } from "../constants/join";

export interface HireFormInputs {
  organization: string;
  name: string;
  email: string;
  website: string;
  project_categories: HireSelectForms["categories"][];
  approach: HireSelectForms["approaches"][];
  project_description: string;
  budget: string;
  start_date: string;
  source: string;
}

export interface JoinFormInputs {
  name: string;
  email: string;
  main_specialization: string;
  years_experience: string;
  other_specializations: JoinSelectForms["specializations"][];
  technologies: JoinSelectForms["technologies"][];
  crypto_experience: string;
  availability: string;
  interest: string;
  github: string;
  linkedIn: string;
  twitter: string;
  discord: string;
  hear_about: string;
}
