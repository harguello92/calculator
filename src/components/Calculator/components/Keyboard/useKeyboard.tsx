import { useMemo } from "preact/hooks";
import useActions from "../../../../hooks/useActions";

import { ReactComponent as Division } from "../../../Icons/Division.svg";
import { ReactComponent as Equal } from "../../../Icons/Equal.svg";
import { ReactComponent as Multiply } from "../../../Icons/Multiply.svg";
import { ReactComponent as PlusMinus } from "../../../Icons/PlusMinus.svg";
import { ReactComponent as Plus } from "../../../Icons/Plus.svg";
import { ReactComponent as Minus } from "../../../Icons/Minus.svg";

const useKeyboard = () => {
  const { setOperation, evaluation, reset, changeSign } = useActions();

  type keys = {
    value: any;
    onClick: () => void;
    bullet?: boolean;
  }[];

  const keys: keys = useMemo(
    () => [
      { value: "C", onClick: () => reset(), bullet: true },
      {
        value: <PlusMinus width={20} height={20} />,
        onClick: () => changeSign(),
        bullet: true,
      },
      {
        value: <Division width={20} height={20} />,
        onClick: () => setOperation("/"),
        bullet: true,
      },
      {
        value: <Multiply width={20} height={20} />,
        onClick: () => setOperation("*"),
        bullet: true,
      },
      { value: "7", onClick: () => setOperation("7") },
      { value: "8", onClick: () => setOperation("8") },
      { value: "9", onClick: () => setOperation("9") },
      {
        value: <Minus width={20} height={20} />,
        onClick: () => setOperation("-"),
        bullet: true,
      },
      { value: "4", onClick: () => setOperation("4") },
      { value: "5", onClick: () => setOperation("5") },
      { value: "6", onClick: () => setOperation("6") },
      {
        value: <Plus width={20} height={20} />,
        onClick: () => setOperation("+"),
        bullet: true,
      },
      { value: "1", onClick: () => setOperation("1") },
      { value: "2", onClick: () => setOperation("2") },
      { value: "3", onClick: () => setOperation("3") },
      {
        value: <Equal width={20} height={20} />,
        onClick: () => evaluation(),
        bullet: true,
      },
      { value: "0", onClick: () => setOperation("0") },
      { value: ",", onClick: () => setOperation(",") },
    ],
    []
  );

  return { keys };
};

export default useKeyboard;
