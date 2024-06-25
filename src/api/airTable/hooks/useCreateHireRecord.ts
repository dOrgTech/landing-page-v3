/** @format */

import { useState } from "react";
import { HireFormInputs } from "../../../utils/network";

const useCreateHireRecord = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const generateBody = (fields: HireFormInputs) => {
    return {
      records: [
        {
          fields: {
            Organization: fields.organization,
            "Contact Name": fields.name,
            "Contact Email": fields.email,
            Website: fields.website,
            Description: fields.project_description,
            Category: fields.project_categories,
            "What is your budget": fields.budget,
            "Do you need to raise funds?": fields.raise_funds,
            "How would you like to work together?": fields.approach,
            "When would you like to get started?": fields.start_date,
            "How did you hear about us?": fields.source,
            Stage: "Website Lead",
          },
        },
      ],
    };
  };

  const createRecord = async (fields: HireFormInputs): Promise<void> => {
    setLoading(true);
    const body = generateBody(fields);
    await fetch(`${process.env.REACT_APP_CLOUDFLARE_HIRE_API}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Record-Type": "hire",
      },
      body: JSON.stringify(body),
    })
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
