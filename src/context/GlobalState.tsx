import { useState } from "preact/hooks";
import { createContext } from "preact";
import { GlobalState, Props } from "./GlobalState.types";

const GlobalContext = createContext({} as GlobalState);

const GlobalContextProvider = ({ children }: Props) => {
  const [queue, pushQueue] = useState([]);
  const [history, pushHistory] = useState([]);

  const value = {
    queue,
    pushQueue,
    history,
    pushHistory,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
