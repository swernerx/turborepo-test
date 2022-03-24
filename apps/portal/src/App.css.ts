import { style } from '@vanilla-extract/css';

export const AppClass = style({
  textAlign: "center"
})

export const AppLogoClass = style({
  width: "40vmin",
  pointerEvents: "none"
})

export const AppHeaderClass = style({
  backgroundColor: "#282c34",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "white"
})
