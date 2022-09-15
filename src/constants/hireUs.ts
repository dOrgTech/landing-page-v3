
export interface FormValueLabel {
  value: string;
  label: string;
}

export interface FormValueLabels {
  categories: FormValueLabel[];
  approaches: FormValueLabel[];
  budgets: FormValueLabel[];
  start_dates: FormValueLabel[];
}

export const hireUsSelectOptions: FormValueLabels = {
  categories: [
    { value: "dao/governance", label: "DAO/Governance"},
    { value: "deFi", label: "DeFi"},
    { value: "social", label: "Social"},
    { value: "infrastructure", label: "Infrastructure"},
    { value: "other", label: "Other"},
  ],
  approaches: [
    { value: "fixed scope", label: "Fixed Scope Project"},
    { value: "team extension", label: "Team Extension"},
    { value: "consulting", label: "Consulting &amp; Advisory"},
    { value: "ecosystem partnership", label: "Ecosystem Partnership"},
    { value: "not specified", label: "Not Specified"},
  ],
  budgets: [
    { value: "below 10k", label: "Below $10,000"},
    { value: "10-50k", label: "$10,000 - $50,000"},
    { value: "50-100k", label: "$50,000 - $100,000"},
    { value: "100k+", label: "Above $100,000"},
    { value: "not specified", label: "Not Specified"},
  ],
  start_dates: [
    { value: "within 1 month", label: "Within 1 month"},
    { value: "1-3 months", label: "1 - 3 months from now"},
    { value: "not specified", label: "Not Specified"},
  ]
}
