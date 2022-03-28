import { style } from '@vanilla-extract/css';
import { rootVars } from '../Root.css';

export const ButtonStyle = style({
  backgroundColor: rootVars.color.brand,
  fontFamily: rootVars.font.body,
  color: 'black',
  padding: "6px 16px",
  appearance: "none",
  border: "1px solid #444",
  borderRadius: "4px",
  boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
  transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)",
  textTransform: "uppercase",
  lineHeight: 1.75,

  ':hover': {
    backgroundColor: "rgb(30, 200, 200)"
  }
});

export const PrimaryButtonStyle = style([
  ButtonStyle,
  {
    backgroundColor: rootVars.color.primary,
    padding: "6px 22px"
  }
])
