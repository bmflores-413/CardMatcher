import { ReactNode } from "react"
import { classNames } from "react-select/src/utils"
import styles from './Form.module.scss'

export interface IFormElementProps {
    children?: ReactNode;
    labelText?: ReactNode;
    className?: string;
    name: string
}

export const FormElement = ({children, labelText, className, name}: IFormElementProps) => {
    return (
      <div className={className}>
        <label className={styles.label} htmlFor={name}>{labelText}</label>
        <div className={styles.formElement}>{children}</div>
      </div>
  )
}