/** @format */
'use client';
/** @jsxImportSource @emotion/react */
import Footer from '@/app/components/layout/footer';
import Header from '@/app/components/layout/header';
import Sider from '@/app/components/layout/sider';
import { css } from '@emotion/react';

export default function RootLayout({ children }) {
  return (
    <div css={homeStyle}>
      <Sider />
      <div css={mainStyle}>
        <Header />
        <div css={contentStyle}>
          {children} <Footer />
        </div>
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
  margin: 0 auto;
  margin-left: 200px;
  overflow-y: auto;
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const contentStyle = css`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  padding-top: 64px;
  overflow-y: auto;
`;
