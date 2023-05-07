import { useState } from "preact/hooks";
import { ComponentChildren, createContext } from "preact";
import type { Sign } from "../constants/signs";

interface GlobalState {
  display: string;
  setDisplay: (value: any) => void;
  subDisplay: string;
  setSubDisplay: (value: any) => void;
  operations: Sign[];
  setOperation: (value: any) => void;
}

const GlobalContext = createContext({} as GlobalState);

interface Props {
  children: ComponentChildren;
}

const GlobalContextProvider = ({ children }: Props) => {
  const [display, setDisplay] = useState("0");
  const [subDisplay, setSubDisplay] = useState("");
  const [operations, setOperation] = useState([]);

  const value = {
    display,
    setDisplay,
    subDisplay,
    setSubDisplay,
    operations,
    setOperation,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
