import styles from './CardDetail.module.scss';

export const CardDetail = ({detail, value}: {detail: string, value: string}) => {
  return (
    <div className={styles.cardDetailWrapper}>
      <b className={styles.detail}>{`${detail}: `}</b>
      <div>{value}</div>
    </div>)
}