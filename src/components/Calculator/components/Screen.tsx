import useGlobalState from "../../../hooks/useGlobalState";
import styles from "./Screen.module.css";

function Screen() {
  const { display, subDisplay } = useGlobalState();

  return (
    <div className={styles.display}>
      <small className={styles.operations}>{subDisplay}</small>
      <p className={styles.total}>{display}</p>
    </div>
  );
}

export default Screen;
