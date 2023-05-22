/** @format */

import { css } from '@emotion/react';

function IconP({ icon, ...other }) {
  return (
    <svg css={iconCss} {...other} aria-hidden='true'>
      <use xlinkHref={`#${icon}`}></use>
    </svg>
  );
}
export default IconP;

const iconCss = css`
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
`;
