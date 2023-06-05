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
