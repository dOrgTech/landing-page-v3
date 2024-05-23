/** @format */

import { useState } from "react";
import { JoinFormInputs } from "../../../utils/network";

const useCreateJoinRecord = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const generateBody = (fields: JoinFormInputs) => {
    return {
      records: [
        {
          fields: {
            Name: fields.name,
            "Personal Email": fields.email,
            "Main Specialization": [fields.main_specialization],
            "Professional experience": fields.years_experience,
            "Crypto Experience": fields.crypto_experience,
            "Other Specializations": fields.other_specializations,
            "Tech Stack": fields.technologies,
            Availability: fields.availability,
            About: fields.interest,
            "Github/Portfolio": fields.github,
            LinkedIn: fields.linkedIn,
            Twitter: fields.twitter,
            Discord: fields.discord,
            Referral: fields.hear_about,
            Status: "Lead",
          },
        },
      ],
    };
  };

  const createRecord = async (fields: JoinFormInputs): Promise<void> => {
    setLoading(true);
    const body = generateBody(fields);
    await fetch(`${process.env.REACT_APP_CLOUDFLARE_HIRE_API}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Record-Type": "join",
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

export default useCreateJoinRecord;
