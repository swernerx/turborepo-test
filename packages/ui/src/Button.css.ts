import { style } from '@vanilla-extract/css';
import { rootVars } from './Root.css';

export const ButtonStyle = style({
  backgroundColor: rootVars.color.brand,
  fontFamily: rootVars.font.body,
  color: 'white',
  padding: 10
});
