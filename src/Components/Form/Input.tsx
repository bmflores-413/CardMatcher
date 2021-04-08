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
  const hasError = meta.touched && meta.error !== undefined;
  return (
    <FormElement labelText={labelText} className={className} name={name}>
      <input name={name} value={field.value} onChange={onChangeText} className={hasError ? styles.formInputError : styles.formInput} onBlur={()=>helpers.setTouched(true)} type={type}/>
      {hasError && <div className={styles.fieldRequiredMessage}>{meta.error}</div>}
    </FormElement>
  )
};