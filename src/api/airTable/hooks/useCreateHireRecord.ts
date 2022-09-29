import { useState } from "react";
import { HireUsFormInputs } from "../../../utils/network";

const useCreateHireRecord = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const generateBody = (fields: HireUsFormInputs) => {
    return {
      records: [
        {
          fields: {
            Name: fields.name,
            "Project Categories": fields.project_categories,
            Approach: fields.approach,
            "Project Description": fields.project_description,
            Budget: fields.budget,
            "Start Date": fields.start_date,
            Source: fields.source,
            Email: fields.email,
            Organization: fields.organization,
            Website: fields.website,
          },
        },
      ],
    };
  };

  const createRecord = async (fields: HireUsFormInputs): Promise<any> => {
    setLoading(true);
    const body = generateBody(fields);
    await fetch(
      `${process.env.REACT_APP_AIRTABLE_URL}/${process.env.REACT_APP_AIRTABLE_BASE}/${process.env.REACT_APP_AIRTABLE_HIRE_TABLE}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
        body: JSON.stringify(body),
      }
    )
      .then((res) => {
        setLoading(false);
        if (res.status === 200) {
          return { success: true };
        }
        return { success: false };
      })
      .catch(() => {
        setLoading(false);
        return { success: false };
      });
  };

  return { loading, createRecord };
};

export default useCreateHireRecord;
