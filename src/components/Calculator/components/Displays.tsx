import useGlobalState from "../../../hooks/useGlobalState";
import styles from "./Displays.module.css";

function Display() {
  const { display, subDisplay } = useGlobalState();

  return (
    <div className={styles.displays}>
      <p className={styles.operations}>{subDisplay}</p>
      <p className={styles.total}>{display}</p>
    </div>
  );
}

export default Display;
