/** @format */
'use client';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
function Footer() {
  return (
    <div css={bottom}>
      <span>Copyright &copy; zuidap.cool</span>
      <span>
        <a rel='stylesheet' href='https://beian.miit.gov.cn/'>
          京ICP备2022027960号-1
        </a>
      </span>
      <hr css={line} />
    </div>
  );
}

export default Footer;

const bottom = css`
  width: 100%;
  height: 85px;
  font-size: 0.9rem;
  color: var(--c5);
  span {
    display: block;
    text-align: center;
  }
  & > span:first-of-type {
    line-height: 35px;
  }
`;

const line = css`
  width: 100%;
  border: none;
  height: 1px;
  margin: 15px 0;
  background-color: var(--c5);
`;
