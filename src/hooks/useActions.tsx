import { useRef } from "preact/hooks";
import useGlobalState from "./useGlobalState";

const signs = {
  minus: "-",
};

const useActions = () => {
  const { setDisplay, setSubDisplay, resetGlobal } = useGlobalState();
  const queueOperation = useRef("");

  const setOperation = (operation: string) => {
    const lastItem = queueOperation.current.slice(-1);
    const lastIsAlreadyOperation = isNaN(Number(lastItem));
    const operationIsMinus = operation === signs.minus;
    const isLastItemIsMinus = lastItem === signs.minus;
    const isFirstInteraction = queueOperation.current === "";

    if (
      (lastIsAlreadyOperation && !operationIsMinus) ||
      isLastItemIsMinus ||
      isFirstInteraction
    )
      return;

    queueOperation.current = queueOperation.current + operation;
    setDisplay(queueOperation.current);
  };

  const setNumber = (number: string) => {
    queueOperation.current = queueOperation.current + number;
    setDisplay(queueOperation.current);
  };

  const evaluation = () => {
    const evalBuild = queueOperation.current.replace(/x/g, "*");

    try {
      const result = eval(evalBuild);
      setSubDisplay(queueOperation.current);
      setDisplay(result);
      queueOperation.current = result;
    } catch (error) {
      console.error(error);
    }
  };

  const reset = () => {
    resetGlobal();
    queueOperation.current = "";
  };

  return { setOperation, setNumber, evaluation, reset };
};

export default useActions;
