import { HireUsSelectForms, hireUsSelectOptions } from "../constants/hireUs";
import { JoinUsSelectForms, joinUsSelectOptions } from "../constants/joinUs";
import { SelectForm } from "../constants/selectForm";

export interface HireUsFormInputs {
  "name": string;
  "email": string;
  "organization": string;
  "website": string;
  "project_categories": HireUsSelectForms["categories"][];
  "approach": HireUsSelectForms["approaches"][];
  "project_description": string;
  "budget": string;
  "start_date": string;
  "source": string;
}

export interface JoinUsFormInputs {
  "name": string;
  "email": string;
  "main_specialization": string;
  "years_experience": string;
  "other_specializations": JoinUsSelectForms["specializations"][];
  "technologies": JoinUsSelectForms["technologies"][];
  "crypto_experience": string;
  "availability": string;
  "interest": string;
  "github": string;
  "linkedIn": string;
  "twitter": string;
  "discord": string;
  "hear_about": string;
  "tax_registry": string;
}

interface HireUsSelectFormsubmission {
  fields: {
    "Name": string;
    "Approach": HireUsSelectForms["approaches"][];
    "Budget": string;
    "Email": string;
    "Organization": string;
    "Website": string;
    "Project Categories": HireUsSelectForms["categories"][];
    "Project Description": string;
    "Start Date": string;
    "Source": string;
  }
}

interface JoinUsSelectFormsubmission {
  fields: {
    "Name": string;
    "Email": string;
    "Main Specialization": string;
    "Years Experience": string;
    "Other Specializations": JoinUsSelectForms["specializations"][];
    "Technologies": JoinUsSelectForms["technologies"][];
    "Crypto Experience": string;
    "Availability": string;
    "Interest": string;
    "Github": string;
    "LinkedIn": string;
    "Twitter": string;
    "Discord": string;
    "Hear About": string;
    "Tax Registry": string;
  }
}

export const sendHireUsForm = async (data: HireUsFormInputs): Promise<Response> => {
  const body: HireUsSelectFormsubmission = { 
    fields: {
      "Name": data.name,
      "Email": data.email,
      "Organization": data.organization,
      "Website": data.website,
      "Project Categories": data.project_categories,
      "Approach": data.approach,
      "Project Description": data.project_description,
      "Budget": data.budget,
      "Start Date": data.start_date,
      "Source": data.source,
    } 
  };
  const url = window.location.href.substring(0, window.location.href.indexOf("/#")) + '/submitHireUsForm';
  return fetch(`https://api.airtable.com/v0/${process.env.appyKCRZDc4ENqG0r}/Table%201`, {
    method: "POST",
    headers: {
      
    },
    body: JSON.stringify(body)
  })
    .then(response => {
      if (!response.ok) {
        // console.log(response.json());
        throw Error('HTTP Error');
      }
      return response;
    })
}

export const sendJoinUsForm = async (data: JoinUsFormInputs): Promise<Response> => {
  const body: JoinUsSelectFormsubmission = { 
    fields: {
      "Name": data.name,
      "Email": data.email,
      "Main Specialization": data.main_specialization,
      "Years Experience": data.years_experience,
      "Other Specializations": data.other_specializations,
      "Technologies": data.technologies,
      "Crypto Experience": data.crypto_experience,
      "Availability": data.availability,
      "Interest": data.interest,
      "Github": data.github,
      "LinkedIn": data.linkedIn,
      "Twitter": data.twitter,
      "Discord": data.discord,
      "Hear About": data.hear_about,
      "Tax Registry": data.tax_registry,
    }
  };
  const url = window.location.href.substring(0, window.location.href.indexOf("/#")) + '/submitJoinUsForm';
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(body)
  })
    .then(response => {
      if (!response.ok) {
        // console.log(response.json());
        throw Error('HTTP Error');
      }
      return response;
    })
}