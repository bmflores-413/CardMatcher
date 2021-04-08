import { ReactNode } from 'react';
import { useField } from 'formik';
import { default as Select} from 'react-select'
import { FormElement } from './FormElement';
import styles from './Form.module.scss'

export interface ISelectItem {
  displayText: ReactNode;
  value: any;
  disabled: boolean;
}

interface IDropdownProps {
  labelText: string,
  items: ISelectItem[],
  name: string,
  className?: string,
}

export const Dropdown = ({labelText, items, name, className}: IDropdownProps) => {
  const [field, meta, helpers] = useField(name);
    
  const setItem = (item: ISelectItem | null) => {
    if(item === null) {return}
    helpers.setValue(item.value);
  };

  const hasError = meta.touched && meta.error !== undefined;

  const customStyles = {
    control: () => ({
      border: hasError ? '3px red solid' : '3px #014039 solid',
      borderRadius: '3px',
      display: 'flex',
      width: '170px'
    }),
  }
  return (
    <FormElement labelText={labelText} className={className} name={name}>
      <Select<ISelectItem> options={items} name={name} values={[field.value]} placeholder={'Select'} onChange={setItem} styles={customStyles}/>
      {hasError && <div className={styles.fieldRequiredMessage}>{meta.error}</div>}
    </FormElement>
  )
}
