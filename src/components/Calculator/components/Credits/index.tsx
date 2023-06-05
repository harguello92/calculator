import styles from "./index.module.css";

function Credits() {
  return (
    <small className={styles.credits}>
      built with ☕ by{" "}
      <a className={styles.credits__link} href="https://github.com/harguello92">
        harguello
      </a>
    </small>
  );
}

export default Credits;
