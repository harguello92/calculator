import Confetti from 'react-confetti';
import styles from './index.module.css';
import classnames from 'classnames';
import { DisplayPresentationProps } from './types';

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
