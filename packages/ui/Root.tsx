import * as React from "react";
import { RootClass } from "./Root.css";
export const Root = ({children}) => {
  return <div className={RootClass}>{children}</div>;
};
