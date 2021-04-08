
import classNames from "classnames";
import { ReactNode } from "react";
import styles from './Form.module.scss';

interface IButtonProps {
  type?: "button" | "submit" | "reset" | undefined; 
  onClick?: ()=>void, children?: ReactNode;
  className?: string;
  disabled?: boolean;
}

export const Button = ({type, onClick, children, disabled = false, className}:IButtonProps) => {
  return (
    <button 
      type={type}
      className={classNames(styles.formButton, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}