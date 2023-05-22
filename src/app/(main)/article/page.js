/** @format */
'use client';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';
const article = ['1', '2', '3', '4', '5', 'next中的Image组件'];

function Article() {
  return (
    <div css={articleStyle}>
      <ul>
        {article.map((name) => (
          <li key={name}>
            <Link href={{ pathname: `/article/${name}` }}>{`${name}.md`}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Article;

const articleStyle = css`
  min-height: 100%;
  padding: 20px;
`;
