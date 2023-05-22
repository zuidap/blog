/** @format */
'use client';
/** @jsxImportSource @emotion/react */
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Sider from '@/components/layout/sider';
import { css } from '@emotion/react';
export default function RootLayout({ children }) {
  return (
    <div css={homeStyle}>
      <Sider />
      <div css={mainStyle}>
        <Header />
        <div css={contentStyle}>{children}</div>
        <Footer />
      </div>
    </div>
  );
}

const homeStyle = css`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
`;
const mainStyle = css`
  flex-grow: 1;
  height: 100%;
  margin: 0 auto;
  margin-left: 200px;
  overflow-y: auto;
`;

const contentStyle = css`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  min-height: 100vh;
`;
