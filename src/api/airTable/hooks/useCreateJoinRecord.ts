import { useState } from "react";
import { JoinUsFormInputs } from "../../../utils/network";

const useCreateJoinRecord = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const generateBody = (fields: JoinUsFormInputs) => {
    return {
      records: [
        {
          fields: {
            "Name": fields.name,
            "Email": fields.email,
            "Main Specialization": fields.main_specialization,
            "Years Experience": fields.years_experience,
            "Other Specializations": fields.other_specializations,
            "Technologies": fields.technologies,
            "Crypto Experience": fields.crypto_experience,
            "Availability": fields.availability,
            "Interest": fields.interest,
            "Github": fields.github,
            "LinkedIn": fields.linkedIn,
            "Twitter": fields.twitter,
            "Discord": fields.discord,
            "Hear About": fields.hear_about,
            "Tax Registry": fields.tax_registry,
          },
        },
      ],
    };
  };

  const createRecord = async (fields: JoinUsFormInputs): Promise<any> => {
    setLoading(true);
    const body = generateBody(fields);
    await fetch(
      `${process.env.REACT_APP_AIRTABLE_URL}/${process.env.REACT_APP_AIRTABLE_BASE}/${process.env.REACT_APP_AIRTABLE_JOIN_TABLE}`,
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

export default useCreateJoinRecord;
