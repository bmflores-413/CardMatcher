import { ReactNode } from 'react';
import styles from './PageLayout.module.scss';

interface IPageProps {
  children?: ReactNode;
  title: ReactNode;
}

export const PageLayout = ({children, title}: IPageProps) => {
  return (
    <div>
      <div className={styles.pageHeader}>
        <h1>{title}</h1>
      </div>
      <div className={styles.pageWrapper}>
        <div className={styles.pageContent}>{children}</div>
      </div>
    </div>
  )
}