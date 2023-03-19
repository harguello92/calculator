import { useState } from "preact/hooks";
import { ComponentChildren, createContext } from "preact";

const GlobalContext = createContext({} as any);

interface Props {
  children: ComponentChildren;
}

const GlobalContextProvider = ({ children }: Props) => {
  const [display, setDisplay] = useState("0");
  const [subDisplay, setSubDisplay] = useState("");

  const resetGlobal = () => {
    setDisplay("0");
    setSubDisplay("");
  };

  const value = {
    display,
    setDisplay,
    subDisplay,
    setSubDisplay,
    resetGlobal,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
