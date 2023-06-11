import useGlobalState from './useGlobalState';
import { SIGNS } from '../constants/signs';
import { getIsInitialStatus, getIsValidOperation } from '../utils';
import type { Signs, SignTypes, Sign } from '../constants/signs.types';

const useActions = () => {
  const { pushQueue, queue: globalQueue, pushHistory } = useGlobalState();

  const setOperation = (sign: SignTypes) => {
    if (!getIsValidOperation(globalQueue, SIGNS[sign].operation)) return;

    pushQueue((queue: Sign[]) => [...queue, SIGNS[sign]]);
  };

  const setNumber = (number: string) => {
    pushQueue((queue: Signs[]) => [...queue, number]);
  };

  const evaluate = () => {
    if (globalQueue.length < 3) return;

    pushHistory(globalQueue);

    const result = eval(
      globalQueue.reduce((acc: string, current: any) => {
        return acc + (current?.operation || current);
      }, '')
    );

    pushQueue([result]);
  };

  const reset = () => {
    pushHistory([]);
    pushQueue([]);
  };

  const deleteLast = () => {
    pushQueue((queue: Signs[]) => queue.slice(0, -1));
  };

  return {
    setOperation,
    setNumber,
    evaluate,
    reset,
    deleteLast
  };
};

export default useActions;
