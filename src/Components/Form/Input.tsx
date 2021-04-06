import { useField } from 'formik';
import { FormElement } from './FormElement';
import styles from './Form.module.scss';


export interface IInputProps {
  labelText?: React.ReactNode;
  name: string;
  type?: string
  className?: string
}

export const Input = ({ name, labelText, type, className }: IInputProps) => {
  const [field, meta, helpers] = useField(name);
  const onChangeText = (event: React.FormEvent<HTMLInputElement>) => {
    helpers.setValue(event.currentTarget.value)
  }
  return (
    <FormElement labelText={labelText} className={className} name={name}>
      <input name={name} value={field.value} onChange={onChangeText} className={styles.formInput} onBlur={()=>helpers.setTouched(true)} type={type}/>
    </FormElement>
  )
};