//import "react-datepicker/dist/react-datepicker.css";
import "react-date-picker/dist/DatePicker.css"

import { useField } from 'formik';

import DatePicker from 'react-date-picker'
import { FormElement } from './FormElement';

import styles from './Form.module.scss'

export interface IDatePickerProps {
  labelText?: React.ReactNode;
  name: string;
}

export const MyDatePicker = ({ name, labelText }: IDatePickerProps) => {
  const [field, meta, helpers] = useField(name);

  const onDateChange = (date: Date | Date[]) => {
    helpers.setValue(date);
  };

  return (
    <FormElement labelText={labelText} name={name}>
      <DatePicker name={name} onChange={onDateChange} value={field.value}/>
    </FormElement>
  )
};

