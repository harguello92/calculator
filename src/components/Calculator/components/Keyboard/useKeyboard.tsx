import { useMemo } from "preact/hooks";
import useActions from "../../../../hooks/useActions";

import { ReactComponent as Division } from "../../../Icons/Division.svg";
import { ReactComponent as Equal } from "../../../Icons/Equal.svg";
import { ReactComponent as Multiply } from "../../../Icons/Multiply.svg";
import { ReactComponent as PlusMinus } from "../../../Icons/PlusMinus.svg";
import { ReactComponent as Plus } from "../../../Icons/Plus.svg";
import { ReactComponent as Minus } from "../../../Icons/Minus.svg";

const useKeyboard = () => {
  const { setOperation, setNumber, evaluation, reset } = useActions();

  type keys = {
    value: any;
    onClick: () => void;
    bullet?: boolean;
  }[];
  console.log("oka");
  const keys: keys = useMemo(
    () => [
      { value: "C", onClick: () => reset(), bullet: true },
      {
        value: <PlusMinus width={20} height={20} />,
        onClick: () => setOperation("%"),
        bullet: true,
      },
      {
        value: <Division width={20} height={20} />,
        onClick: () => setOperation("/"),
        bullet: true,
      },
      {
        value: <Multiply width={20} height={20} />,
        onClick: () => setOperation("x"),
        bullet: true,
      },
      { value: "7", onClick: () => setNumber("7") },
      { value: "8", onClick: () => setNumber("8") },
      { value: "9", onClick: () => setNumber("9") },
      {
        value: <Minus width={20} height={20} />,
        onClick: () => setOperation("-"),
        bullet: true,
      },
      { value: "4", onClick: () => setNumber("4") },
      { value: "5", onClick: () => setNumber("5") },
      { value: "6", onClick: () => setNumber("6") },
      {
        value: <Plus width={20} height={20} />,
        onClick: () => setOperation("+"),
        bullet: true,
      },
      { value: "1", onClick: () => setNumber("1") },
      { value: "2", onClick: () => setNumber("2") },
      { value: "3", onClick: () => setNumber("3") },
      {
        value: <Equal width={20} height={20} />,
        onClick: () => evaluation(),
        bullet: true,
      },
      { value: "0", onClick: () => setNumber("0") },
      { value: ",", onClick: () => setOperation(",") },
    ],
    []
  );

  return { keys };
};

export default useKeyboard;
