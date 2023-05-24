/** @format */
'use client';
/** @jsxImportSource @emotion/react */
import Sider from '@/app/(main)/sider';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import LocalStore from '@/store/localStore';
import { css } from '@emotion/react';
import { redirect } from 'next/navigation';

// 判断是否登录
const isLogin = () => {
  const token = LocalStore.getToken();
  if (token === null) {
    redirect('/leader');
  }
};
export default function RootLayout({ children }) {
  isLogin();
  
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
