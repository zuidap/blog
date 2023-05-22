/** @format */
/** @jsxImportSource @emotion/react */
import responsive from '@/styles/responsive';
import { css } from '@emotion/react';
function RightBox({ children, title, ...args }) {
  return (
    <div css={box} {...args}>
      {title && <h4>{title}</h4>}
      {children}
    </div>
  );
}

export default RightBox;

const box = css`
  max-width: 350px;
  min-width: 300px;
  padding: 10px 24px;
  border: 1px solid var(--c6);
  box-shadow: 0 0 1px 1px var(--c6);
  border-radius: 4px;
  margin-bottom: 10px;
  /* position: relative; */
  display: flex;
  flex-direction: column;
  background-color: var(--c3);
  color: var(--c5);
  font-size: 0.9rem;
  h4 {
    margin: 15px 0 10px 0;
    font-size: 1.2rem;
    color: var(--c2);
  }
  @media (max-width: ${responsive.md}) {
    max-width: 100%;
  }
`;

const line = css`
  margin: 0;
`;
const line2 = css`
  flex: 1 1;
  min-width: 2px;
  margin: 0 10px !important;
`;
export { line, line2 };
