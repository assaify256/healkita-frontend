import styles from "./full-loader.module.scss";

export default function FullLoader() {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinner}></div>
    </div>
  );
}