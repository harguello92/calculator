import classNames from "classnames";
import styles from "./Header.module.css";
import { ReactComponent as Minimize } from "../../Icons/Minus.svg";
import { ReactComponent as Close } from "../../Icons/Multiply.svg";
import { ReactComponent as History } from "../../Icons/History.svg";

function Header() {
  const onClose = () => {
    console.log("Coming soon...");
  };
  const onMinimize = () => {
    console.log("Coming soon...");
  };

  const onClickHistory = () => console.log("History opened");

  return (
    <div className={styles.header}>
      <div className={styles.actions}>
        <span
          className={classNames(styles.button, styles.closeButton)}
          onClick={onClose}
        >
          <Close width={10} height={10} />
        </span>
        <span
          className={classNames(styles.button, styles.minimizeButton)}
          onClick={onMinimize}
        >
          <Minimize width={10} height={10} />
        </span>
      </div>
      <div className={styles.history} onClick={onClickHistory}>
        <History width={25} height={25} />
      </div>
    </div>
  );
}

export default Header;
