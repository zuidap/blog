/** @format */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
export default function Header() {
  return <div css={header}>Header</div>;
}
const header = css`
  width: 100%;
  height: 64px;
  background-color: var(--c2);
  color: var(--c3);
`;
