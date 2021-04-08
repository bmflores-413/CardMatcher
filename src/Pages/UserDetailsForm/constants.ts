import { Occupation, User, UserTitle } from "../../types";
import { ISelectItem } from "../../Components";
import * as Yup from 'yup';

export const FORM_TITLE = 'Enter Your Details';

export const INITIAL_USER: User = {
  title: null,
  firstName: '',
  lastName: '',
  dateOfBirth: null,
  occupation: null,
  address: { postCode: '', },
  annualIncome: 0,
}

export const TITLE_DROPDOWN_OPTIONS: ISelectItem[] = 
  Object.values(UserTitle).filter((value)=>
    typeof value === "string"
  ).map((title: string)=>
    ({
      displayText: title, 
      value: title, 
      disabled: false, 
      label: title
    })
  );

export const OCCUPATION_DROPDOWN_OPTIONS: ISelectItem[] =
  Object.values(Occupation).filter((value)=>
    typeof value === "string"
  ).map((occupation)=>({
    displayText: occupation,
    value: occupation,
    disabled: false,
    label: occupation
  }));

export const VALIDATION_SCHEMA = Yup.object({
  title: Yup.mixed().required('Title is required'),
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  dateOfBirth: Yup.mixed(),
  address: Yup.object({
    postCode: Yup.string().required('Postcode is required'),
    houseNumber: Yup.number(),
  }).noUnknown(false),
  occupation: Yup.mixed().required('Occupation is required'),
  annualIncome: Yup.number().required('Annual Income is required')
});