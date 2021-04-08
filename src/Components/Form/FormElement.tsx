import classNames from "classnames"
import { ReactNode } from "react"
import styles from './Form.module.scss'

export interface IFormElementProps {
    children?: ReactNode;
    labelText?: ReactNode;
    className?: string;
    name: string
}

export const FormElement = ({children, labelText, className, name}: IFormElementProps) => {
    return (
      <div className={classNames(className, styles.formElementWrapper)}>
        <label className={styles.label} htmlFor={name}>{labelText}</label>
        <div className={styles.formElement}>{children}</div>
      </div>
  )
}