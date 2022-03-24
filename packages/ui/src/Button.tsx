import * as React from "react";
import { ButtonStyle } from "./Button.css";

export function Button({children}) {
  return <button className={ButtonStyle}>{children}</button>;
};
