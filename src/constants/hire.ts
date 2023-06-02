import { SelectForm } from "./selectForm"

export interface HireSelectForms {
  categories: SelectForm[];
  approaches: SelectForm[];
  budgets: SelectForm[];
  start_dates: SelectForm[];
}

export const hireSelectOptions: HireSelectForms = {
  categories: [
    { value: "DAO/Governance", label: "DAO/Governance"},
    { value: "DeFi", label: "DeFi"},
    { value: "Public Goods", label: "Public Goods"},
    { value: "Infrastructure", label: "Infrastructure"},
    { value: "Other", label: "Other"},
  ],
  approaches: [
    { value: "Fixed Scope Project", label: "Fixed Scope Project"},
    { value: "Team Extension", label: "Team Extension"},
    { value: "Consulting & Advisory", label: "Consulting & Advisory"},
    { value: "Ecosystem Partnership", label: "Ecosystem Partnership"},
    { value: "Not specified", label: "Not specified"},
  ],
  budgets: [
    { value: "Below $10,000", label: "Below $10,000"},
    { value: "$10,000 to $50,000", label: "$10,000 - $50,000"},
    { value: "$50,000 to $100,000", label: "$50,000 - $100,000"},
    { value: "Above $100,000", label: "Above $100,000"},
    { value: "Not specified", label: "Not specified"},
  ],
  start_dates: [
    { value: "Within 1 month", label: "Within 1 month"},
    { value: "1 - 3 months from now", label: "1 - 3 months from now"},
    { value: "Not specified", label: "Not specified"},
  ]
}
