import { style } from '@vanilla-extract/css';
import { rootVars } from './Root.css';

export const ButtonStyle = style({
  backgroundColor: rootVars.color.brand,
  fontFamily: rootVars.font.body,
  color: 'black',
  padding: "10px 20px",
  appearance: "none",
  border: "1px solid #333",
  borderRadius: "4px"
});
