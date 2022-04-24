import { TagButtonProps } from '../App/types';
import styles from './styles.module.css';

export const TagButton = ({ topic }: TagButtonProps): JSX.Element => {
  return (
    <div className={styles.tagButton}>
        <span className={styles.text}>{topic}</span>
        <div className={styles.shadow}></div>
    </div>
  )
}