import * as React from "react";
import { ButtonStyle } from "./Button.css";

export function Button({children, ...other}) {
  return <button className={ButtonStyle} {...other}>{children}</button>;
};
