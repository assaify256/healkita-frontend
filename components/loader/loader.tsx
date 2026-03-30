import styles from "./loader.module.scss";

export default function Loader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.ring}></div>
        <div className={styles.spinner}></div>
      </div>
    </div>
  );
}