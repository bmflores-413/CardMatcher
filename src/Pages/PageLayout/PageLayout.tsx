import styles from './PageLayout.module.scss';

export const PageLayout: React.FC = (props) => {
    return <div className={styles.pageWrapper}><div className={styles.pageContent}>{props.children}</div></div>
}