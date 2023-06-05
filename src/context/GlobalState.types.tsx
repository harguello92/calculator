import { ComponentChildren } from "preact";
import { Sign } from "../constants/signs.types";

export interface Props {
  children: ComponentChildren;
}

export interface GlobalState {
  queue: Sign[];
  pushQueue: (value: any) => void;
  history: Sign[];
  pushHistory: (value: any) => void;
}
