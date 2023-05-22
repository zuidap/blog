/** @format */
'use client';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';

function Article() {
  return (
    <div css={articleStyle}>
      <ul>
        <li>
          <Link href={{ pathname: '1' }}>1.md</Link>
        </li>
        <li>
          <Link href={{ pathname: '2' }}>2.md</Link>
        </li>
        <li>
          <Link href={{ pathname: '3' }}>3.md</Link>
        </li>
        <li>
          <Link href={{ pathname: '4' }}>4.md</Link>
        </li>
      </ul>
    </div>
  );
}

export default Article;

const articleStyle = css`
  min-height: 100%;
  padding-top: 64px;
`;
