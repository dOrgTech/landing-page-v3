
export interface HireUsFormInputs {
  "name": string;
  "email": string;
  "organization": string;
  "website": string;
  "project_categories": string[];
  "approach": string[];
  "project_description": string;
  "budget": string;
  "start_date": string;
  "source": string;
}

interface FormSubmission {
  fields: {
    "Name": string;
    "Email": string;
    "Organization": string;
    "Website": string;
    "Project Categories": string[];
    "Approach": string[];
    "Project Description": string;
    "Budget": string;
    "Start Date": string;
    "Source": string;
  }
}

export const sendContactForm = async (data: HireUsFormInputs): Promise<Response> => {
  const body: FormSubmission = { 
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
  // const url = window.location.href.substring(0, window.location.href.indexOf("/#")) + '/submitContactForm';
  const url = 'http://localhost:3042/submitContactForm';
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