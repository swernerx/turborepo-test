import * as React from "react";
import { ButtonStyle } from "./Button.css";
export const Button = ({children}) => {
  return <button className={ButtonStyle}>{children}</button>;
};
