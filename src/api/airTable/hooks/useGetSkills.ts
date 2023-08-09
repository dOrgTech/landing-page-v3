import { useState } from "react";
import { CreateSelectOption } from "../../../commons/form/CreatableSelect";

const useGetSkills = () => {
  const [data, setData] = useState<CreateSelectOption[]>([]);

  const fetchSkills = async () => {
    await fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/${process.env.REACT_APP_AIRTABLE_SKILLS_TABLE}?fields%5B%5D=Name`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_PERSONAL_ACCESS_TOKEN_AIRTABLE}`,
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        const skills = response.records.map(
          (record: { fields: { Name: string }; id: string }) => {
            return {
              label: record.fields.Name ? record.fields.Name : "",
              value: record.id ?? "",
            };
          }
        );
        setData(skills);
      });
  };

  return { fetchSkills, data };
};

export default useGetSkills;
