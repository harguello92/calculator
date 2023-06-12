import classNames from 'classnames';
import styles from './index.module.css';
import { ReactComponent as Minimize } from '../../../Icons/Minus.svg';
import { ReactComponent as Close } from '../../../Icons/Multiply.svg';
import { HeaderProps } from './types';

function HeaderPresentation({ onClose, onMinimize }: HeaderProps) {
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
    </div>
  );
}

export default HeaderPresentation;
