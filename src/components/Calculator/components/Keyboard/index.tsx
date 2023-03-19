import classNames from "classnames";
import styles from "./index.module.css";
import useKeyboard from "./useKeyboard";

function Keyboard() {
  const { keys } = useKeyboard();

  return (
    <div className={styles.keyboard}>
      {keys.map(({ value, onClick, bullet }) => (
        <button
          type="button"
          className={classNames(styles.key, {
            [styles["key--bullet"]]: bullet,
          })}
          onClick={onClick}
        >
          {value}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
