export type SignTypes =
  | "minus"
  | "multiplication"
  | "division"
  | "percentage"
  | "sum"
  | "equal"
  | "coma";

export interface Sign {
  display: string;
  operation: string;
}

export type Signs = {
  [key in SignTypes]: Sign;
};

export const SIGNS: Signs = {
  minus: {
    display: "-",
    operation: "-",
  },
  multiplication: {
    display: "x",
    operation: "*",
  },
  division: {
    display: "÷",
    operation: "/",
  },
  percentage: {
    display: "%",
    operation: "%",
  },
  sum: {
    display: "+",
    operation: "+",
  },
  equal: {
    display: "=",
    operation: "=",
  },
  coma: {
    display: ",",
    operation: ",",
  },
} as const;
