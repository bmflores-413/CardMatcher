import { UserTitle, User, Occupation } from "../../types";

export const MOCK_USER_1: User = {
  title: UserTitle.MR,
  firstName: 'Ollie',
  lastName: 'Murphree',
  dateOfBirth: new Date('July 1, 1970'),
  address: {
    houseNumber: 700,
    postCode: 'BS14 9PR'
  },
  annualIncome: 34000,
  occupation: Occupation.FULL_TIME,
};

export const MOCK_USER_2: User = {
  title: UserTitle.MISS,
  firstName: 'Elizabeth',
  lastName: 'Edmundson',
  dateOfBirth: new Date('June 29, 1984'),
  address: {
    houseNumber: 177,
    postCode: 'PH12 8UW'
  },
  annualIncome: 17000,
  occupation: Occupation.STUDENT,
};

export const MOCK_USER_3: User = {
  title: UserTitle.MR,
  firstName: 'Trevor',
  lastName: 'Rieck',
  dateOfBirth: new Date('September 7, 1990'),
  address: {
    houseNumber: 343,
    postCode: 'TS25 2NF'
  },
  annualIncome: 15000,
  occupation: Occupation.PART_TIME,
};