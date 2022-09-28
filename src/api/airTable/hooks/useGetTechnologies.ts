import { useState } from "react";

const useGetTechnologies = () => {

  const fetchSkills = async (): Promise<any> => {
    await fetch(
      `https://api.airtable.com/v0/appbNUGuda5Gk6wPg/tblsHUcPVh40bZAis?fields%5B%5D=Name`,
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
        }
      }
    )
    .then(response => response.json())
    .then(response => {
  
        const technologies = response.records.map((record: any) => {
          return     {
             label: record.fields.Name ? record.fields.Name : "",
             value: record.fields.Name ? record.fields.Name : "",
           }
        } )
        return technologies
    } )

  return {  fetchSkills };
}};

export default useGetTechnologies;
