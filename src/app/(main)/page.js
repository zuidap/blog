/** @format */

'use client';
/** @jsxImportSource @emotion/react */
import { ArticleCard } from '@/app/components/home/articleCard';
import ArticleList from '@/app/components/home/articleList';
import { css } from '@emotion/react';
export default function Home() {
  return (
    <div css={home}>
      <ArticleList>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </ArticleList>
    </div>
  );
}

const home = css`
  padding: 0.1px;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  min-height: 100vh;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: stretch;
  }
`;
