import { ReactNode } from "react";
import styles from './Card.module.scss';

export const Card = ({children, title}:{children: ReactNode, title?: ReactNode}) => {
  return(
    <div className={styles.cardWrapper} data-testid={'ui-card'}>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        {children}
      </div>
    </div>
  )
}