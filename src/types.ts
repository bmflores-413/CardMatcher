export enum Occupation {
  STUDENT="Student",
  PART_TIME="Part Time",
  FULL_TIME="Full Time",
  UNEMPLOYED="Unemployed",
}

export enum IncomeThresholdType {
  FLOOR,
  CEILING,
}

export type incomeEligibility = {
  amount: number,
  type: IncomeThresholdType,
}

export type CreditCard = {
  name: string,
  apr: number,
  balanceTransferOfferDuration: number,
  purchaseOffterDuration: number,
  creditLimit: number,
  incomeEligibility: incomeEligibility | null,
  occupationEligibility: Occupation[] | null,
  locationEligibility: string | null,
}

export type Address = {
  postCode: string,
  houseNumber?: number,
  streetName?: string,
  city?: string
}

export enum UserTitle {
  MRS="Mrs",
  MS="Ms",
  MISS="Miss",
  DR="Dr",
  SR="Sr",
  MR="Mr",
}

export type User = {
  title: UserTitle | null,
  firstName: string,
  lastName: string,
  dateOfBirth: Date | null,
  occupation: Occupation | null,
  address: Address,
  annualIncome: number
}