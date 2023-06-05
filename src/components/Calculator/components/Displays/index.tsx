import { useEffect, useMemo, useRef } from "preact/hooks";
import styles from "./index.module.css";
import classnames from "classnames";
import useGlobalState from "../../../../hooks/useGlobalState";

function Display() {
  const { queue, history } = useGlobalState();
  const totalRef = useRef<any>();

  const subDisplay = useMemo(() => {
    if (history.length === 0) return "";
    return history.map((item) => item?.display || item).join("") + "=";
  }, [history]);

  const display =
    queue.reduce(
      (acc: string, current: any) => acc + (current?.display || current),
      ""
    ) || 0;

  const historyKey = useMemo(() => Math.random(), [history]);
  const totalKey = useMemo(() => Math.random(), [history]);

  useEffect(() => {
    totalRef.current.scrollLeft = totalRef.current.scrollWidth;
  }, [queue]);

  return (
    <div className={styles.displays}>
      <p
        key={historyKey}
        className={classnames(styles.history, styles.history___animated)}
      >
        {subDisplay}
      </p>
      <p
        ref={totalRef}
        key={totalKey}
        className={classnames(styles.total, styles.total___animated)}
      >
        {display}
      </p>
    </div>
  );
}

export default Display;
