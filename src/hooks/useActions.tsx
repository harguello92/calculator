import useGlobalState from "./useGlobalState";
import { SIGNS } from "../constants/signs";
import { getIsInitialStatus, getIsValidOperation } from "../utils";
import type { Signs, SignTypes, Sign } from "../constants/signs";
import { useEffect } from "preact/hooks";

const useActions = () => {
  const {
    setDisplay,
    display,
    setSubDisplay,
    setOperation: setOperationToGlobal,
    operations,
  } = useGlobalState();

  const setOperation = (sign: SignTypes) => {
    if (!getIsValidOperation(operations, SIGNS[sign].operation)) return;

    if (getIsInitialStatus(operations) && SIGNS[sign] === SIGNS.minus) {
      setOperationToGlobal((operations: Sign[]) => [
        ...operations,
        SIGNS[sign],
      ]);
      return;
    }

    setOperationToGlobal((operations: Sign[]) => [...operations, SIGNS[sign]]);
  };

  const setNumber = (number: string) => {
    setOperationToGlobal((operations: Signs[]) => [...operations, number]);
  };

  const evaluation = () => {
    try {
      const result = eval(
        operations.reduce(
          (acc: string, current: any) => acc + (current?.operation || current),
          ""
        )
      ).toString();

      if (result === display) return;

      setSubDisplay(
        operations.reduce(
          (acc: string, current: any) => acc + (current?.operation || current),
          ""
        ) + SIGNS.equal.display
      );

      setDisplay(result);

      // setOperationToGlobal(display.split(""));
    } catch (error) {
      setSubDisplay("Not a valid operation");
    }
  };

  const reset = () => {
    setOperationToGlobal([]);
  };

  const deleteLast = () => {
    setOperationToGlobal((operations: Signs[]) => operations.slice(0, -1));
  };

  useEffect(() => {
    setDisplay(
      operations.reduce(
        (acc: string, current: any) => acc + (current?.display || current),
        ""
      )
    );

    if (operations.length === 0) {
      setSubDisplay("");
    }

    if (operations.length === 0) {
      setDisplay("0");
    }
  }, [operations]);

  return { setOperation, setNumber, evaluation, reset, deleteLast };
};

export default useActions;
