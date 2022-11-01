import { SelectForm } from "./selectForm";

export interface JoinSelectForms {
  specializations: SelectForm[];
  experienceYears: SelectForm[];
  technologies: SelectForm[];
  cryptoExperience: SelectForm[];
  availability: SelectForm[];
}

export const joinSelectOptions: JoinSelectForms = {
  specializations: [
    { value: "frontend", label: "Frontend Development" },
    { value: "backend", label: "Backend Development" },
    { value: "fullstack", label: "Full-Stack Development" },
    { value: "smart contract", label: "Smart Contract Developer" },
    { value: "blockchain developer", label: "Blockchain Developer" },
    { value: "protocol", label: "Protocol Engineer" },
    { value: "engineer", label: "DevOps Engineer" },
    { value: "design", label: "Product Design" },
  ],
  experienceYears: [
    { value: "Junior (0-2)", label: "Junior (0-2 years)" },
    { value: "Intermediate (3-4)", label: "Intermediate (3-4 years)" },
    { value: "Senior (5-8)", label: "Senior (5-8 years)" },
    { value: "Veteran (8+)", label: "Veteran (8+ years)" },
  ],
  technologies: [
    { value: "fake", label: "Need to add technologies from airtable" },
  ],
  cryptoExperience: [
    { value: "No or limited experience", label: "No or limited experience" },
    {
      value: "Personal projects or hackathons",
      label: "Personal projects or hackathons",
    },
    {
      value: "0-2 years of professional experience",
      label: "0-2 years of professional experience",
    },
    {
      value: "2+ years of professional experience",
      label: "2+ years of professional experience",
    },
  ],
  availability: [
    { value: "Very part-time (1-5)", label: "Very part-time (1-5)" },
    { value: "Part-time (6-15)", label: "Part-time (6-15)" },
    { value: "Half-time (16-25)", label: "Half-time (16-25)" },
    { value: "Almost full-time (26-35)", label: "Almost full-time (26-35)" },
    { value: "Full-time (35+)", label: "Full-time (35+)" },
  ],
};
