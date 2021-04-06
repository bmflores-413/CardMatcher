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

const customStyles = {
  control: () => ({
    border: '3px #014039 solid',
    borderRadius: '3px',
    display: 'flex'
  }),
}

export const Dropdown = ({labelText, items, name, className}: IDropdownProps) => {
  const [field, meta, helpers] = useField(name);
    
  const setItem = (item: ISelectItem | null) => {
    if(item === null) {return}
    helpers.setValue(item.value);
  };

  return (
    <FormElement labelText={labelText} className={className} name={name}>
      <div className={styles.reactSelect}>
        <Select<ISelectItem> options={items} name={name} values={[field.value]} placeholder={'Select'} onChange={setItem} styles={customStyles}/>
      </div>
    </FormElement>
  )
}
