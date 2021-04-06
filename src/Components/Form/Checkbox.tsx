import { ReactNode } from 'react';
import styles from './Form.module.scss';

export const CheckboxWithLabel = ({checked, onCheck, label}: {checked: boolean, onCheck: ()=>void, label: ReactNode}) => {
  return (
    <div className={styles.checkboxWithLabel}>
      <div className={styles.checkboxWrapper}>
        <input type={'checkbox'} checked={checked} onChange={onCheck}/>
      </div>
      {label}
    </div>
  )
}