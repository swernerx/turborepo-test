import { createTheme } from "@vanilla-extract/css"

export const [RootClass, rootVars] = createTheme({
  color: {
    brand: "rgb(186, 230, 253)",
    primary: "rgb(167, 243, 208)"
  },
  font: {
    body: "Roboto"
  }
})
