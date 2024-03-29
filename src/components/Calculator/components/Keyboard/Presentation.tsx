import classNames from 'classnames';
import styles from './index.module.css';
import { KeyboardProps } from './types';

function KeyboardPresentation({ keys }: KeyboardProps) {
  return (
    <div className={styles.keyboard}>
      {keys.map(({ value, onClick, bullet }) =>
        value ? (
          <button
            type="button"
            className={classNames(styles.key, {
              [styles['key--bullet']]: bullet
            })}
            onClick={onClick}
          >
            {value}
          </button>
        ) : (
          <div className={styles.keyBlank}></div>
        )
      )}
    </div>
  );
}

export default KeyboardPresentation;
