import { useState } from "preact/hooks";
import { ComponentChildren, createContext } from "preact";

interface GlobalState {
  display: string;
  setDisplay: (value: any) => void;
  subDisplay: string;
  setSubDisplay: (value: any) => void;
}

const GlobalContext = createContext({} as GlobalState);

interface Props {
  children: ComponentChildren;
}

const GlobalContextProvider = ({ children }: Props) => {
  const [display, setDisplay] = useState("0");
  const [subDisplay, setSubDisplay] = useState("");

  const value = {
    display,
    setDisplay,
    subDisplay,
    setSubDisplay,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
