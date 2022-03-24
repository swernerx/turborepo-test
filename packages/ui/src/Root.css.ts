import { createTheme } from '@vanilla-extract/css';

export const [RootClass, rootVars] = createTheme({
  color: {
    brand: '#ccc'
  },
  font: {
    body: 'arial'
  }
});
