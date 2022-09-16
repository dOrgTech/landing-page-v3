import { SelectForm } from "./selectForm"

export interface JoinUsSelectForms {
  specializations: SelectForm[];
  experienceYears: SelectForm[];
  technologies: SelectForm[];
  cryptoExperience: SelectForm[];
  availability: SelectForm[];
  taxResidency: SelectForm[];
}

export const joinUsSelectOptions: JoinUsSelectForms = {
  specializations: [
    { value: "frontend", label: "Frontend Development"},
    { value: "backend", label: "Backend Development"},
    { value: "fullstack", label: "Full-Stack Development"},
    { value: "smart contract", label: "Smart Contract Developer"},
    { value: "blockchain developer", label: "Blockchain Developer"},
    { value: "protocol", label: "Protocol Engineer"},
    { value: "engineer", label: "DevOps Engineer"},
    { value: "design", label: "Product Design"},
  ],
  experienceYears: [
    { value: "junior", label: "Junior (0-2 years)"},
    { value: "intermediate", label: "Intermediate (3-4 years"},
    { value: "senior", label: "Senior (5-8 yeras)"},
    { value: "veteran", label: "Veteran (8+ years)"},
  ],
  technologies: [
    { value: "fake", label: "Need to add technologies from airtable"},
  ],
  cryptoExperience: [
    { value: "none/limited", label: "No or limited experience"},
    { value: "personal projects/hackathons", label: "Personal projects or hackathons"},
    { value: "0-2 years", label: "0-2 years of professional experience"},
    { value: "2+ yeras", label: "2+ years of professional experience"},
  ],
  availability: [
    { value: "very part-time", label: "Very part-time (1-5)"},
    { value: "part time", label: "Part-time (6-15)"},
    { value: "half-time", label: "Half-time (16-25)"},
    { value: "almost full-time", label: "Almost full-time (26-35)"},
    { value: "full-time", label: "Full-time (35+)"},
  ],
  taxResidency: [
    {value: "yes", label: "Yes"},
    {value: "no", label: "No"}
  ]
}