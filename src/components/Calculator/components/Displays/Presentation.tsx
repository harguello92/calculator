import Confetti from 'react-confetti';
import { useEffect, useRef } from 'preact/hooks';
import styles from './index.module.css';
import classnames from 'classnames';

interface DisplayPresentationProps {
  historyDisplayKey: number;
  subDisplay: string;
  totalDisplayKey: number;
  display: any;
  queue: any[];
  totalRef: any;
}

function DisplayPresentation({
  historyDisplayKey,
  subDisplay,
  totalDisplayKey,
  display,
  totalRef
}: DisplayPresentationProps) {
  return (
    <>
      <Confetti key={historyDisplayKey} recycle={false} />
      <div className={styles.displays}>
        <p
          key={historyDisplayKey}
          className={classnames(styles.history, styles.history___animated)}
        >
          {subDisplay}
        </p>
        <p
          ref={totalRef}
          key={totalDisplayKey}
          className={classnames(styles.total, styles.total___animated)}
        >
          {display}
        </p>
      </div>
    </>
  );
}

export default DisplayPresentation;
