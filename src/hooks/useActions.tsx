import { useState } from "preact/hooks";
import useGlobalState from "./useGlobalState";

const useActions = () => {
  const { setDisplay, setSubDisplay } = useGlobalState();
  const [queueOperation, setQueueOperation] = useState("");

  const setOperation = (operation: string) => {
    const concatenation = queueOperation + operation;
    setQueueOperation(concatenation);
    setDisplay(concatenation);
  };

  const evaluation = () => {
    const result = eval(queueOperation);
    setSubDisplay(queueOperation);
    setDisplay(result);
    setQueueOperation(result);
  };

  const reset = () => {
    setDisplay(0);
    setSubDisplay("");
    setQueueOperation("");
  };

  const changeSign = () => {};

  return { setOperation, evaluation, reset, changeSign };
};

export default useActions;
