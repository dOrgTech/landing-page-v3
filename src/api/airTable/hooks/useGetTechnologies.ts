import { useState } from "react";
import { CreateSelectOption } from "../../../commons/form/CreatableSelect";

const useGetTechnologies = () => {
  const [data, setData] = useState<CreateSelectOption[]>([]);

  const fetchTechnologies = async () => {
    await fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/${process.env.REACT_APP_AIRTABLE_TECHNOLOGIES_TABLE}?fields%5B%5D=Name`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_READ_TOKEN}`,
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        const technologies = response.records.map(
          (record: { fields: { Name: string }; id: string }) => {
            return {
              label: record.fields.Name ? record.fields.Name : "",
              value: record.id ?? "",
            };
          }
        );
        setData(technologies);
      });
  };

  return { fetchTechnologies, data };
};

export default useGetTechnologies;
