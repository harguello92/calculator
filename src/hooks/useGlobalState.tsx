import { useContext } from "preact/hooks";
import { GlobalContext } from "../context/GlobalState";

const useGlobalState = () => {
  const useGlobalStateContext = useContext(GlobalContext);

  if (useGlobalStateContext === undefined) {
    throw new Error("GlobalContext was used outside of its Provider");
  }

  return useGlobalStateContext;
};

export default useGlobalState;
