import { TagButtonProps } from './types';
import styles from './styles.module.scss';

export const TagButton = (
  { topic }: TagButtonProps
): JSX.Element => {
  return (
    <div className={styles.tagButton}>
        <span className={styles.text}>{topic}</span>
        <div className={styles.shadow}></div>
    </div>
  )
}