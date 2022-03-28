import * as React from "react";
import { ButtonStyle, PrimaryButtonStyle } from "./Button.css";

export interface ButtonProps {
  primary: boolean
}

export function Button({children, primary, ...other}: React.PropsWithChildren<ButtonProps>) {
  return <button className={primary ? PrimaryButtonStyle : ButtonStyle} {...other}>{children}</button>;
};
