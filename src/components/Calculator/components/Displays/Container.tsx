import { MutableRef, useEffect, useMemo, useRef } from 'preact/hooks';
import useGlobalState from '../../../../hooks/useGlobalState';
import DisplayPresentation from './Presentation';
import { Sign } from '../../../../constants/signs.types';

function DisplayContainer() {
  const { queue, history } = useGlobalState();
  const totalRef = useRef() as MutableRef<HTMLParagraphElement>;

  const subDisplay = useMemo(() => {
    if (history.length === 0) return '';
    return history.map((item) => item?.display || item).join('') + '=';
  }, [history]);

  const display =
    queue.reduce(
      (acc: string, current: Sign) => acc + (current?.display || current),
      ''
    ) || '0';

  const historyDisplayKey = useMemo(() => Math.random(), [history]);
  const totalDisplayKey = useMemo(() => Math.random(), [history]);

  useEffect(() => {
    if (!totalRef.current) return;
    totalRef.current.scrollLeft = totalRef.current.scrollWidth;
  }, [queue]);

  return (
    <DisplayPresentation
      queue={queue}
      subDisplay={subDisplay}
      display={display}
      historyDisplayKey={historyDisplayKey}
      totalDisplayKey={totalDisplayKey}
      totalRef={totalRef}
    />
  );
}

export default DisplayContainer;
