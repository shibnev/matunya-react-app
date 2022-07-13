import styles from './Btn.module.scss';

export const Btn = ({ children, className, onClick }) => {
  return (
    <button className={`${styles.btn} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
