/** @format */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
function ArticleList(props) {
  return <div css={list}>{props.children}</div>;
}

export default ArticleList;

const list = css`
  flex: 1 1 auto;
  max-width: 1024px;
  margin-right: 10px;
  margin-left: 10px;
  & > * {
    margin-bottom: 12px;
    display: block;
  }

  @media (max-width: 1024px) {
    margin-right: 0px;
    margin-left: 0px;
    max-width: 100%;
  }
`;
