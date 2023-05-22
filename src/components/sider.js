/** @format */
'use client';
/** @jsxImportSource @emotion/react */

import { zuidapIcon } from '@/assets/iconUrls';
import { css } from '@emotion/react';
import Image from 'next/image';

import Link from 'next/link';
const navItems = [
  { title: '首页', path: '/home' },
  { title: '笔记', path: '/article' },
  { title: 'AI', path: '/ai' },
  { title: '关于', path: '/about' },
  { title: '我的', path: '/mine' },
];

function Sider() {
  return (
    <div css={leftNavStyle}>
      <Image css={logoStyle} src={zuidapIcon} alt='logo' />

      <ul>
        {navItems.map((item) => {
          return (
            <li key={item.title}>
              <Link
                className={({ isActive }) => (isActive ? 'selected' : '')}
                href={{ pathname: item.path, query: { id: 1 } }}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sider;

const logoStyle = css`
  max-width: 80%;
  object-fit: contain;
  display: block;
  margin: 20px auto;
`;

const leftNavStyle = css`
  flex: none;
  position: fixed;
  z-index: 100;
  width: 200px;
  height: 100vh;
  background-color: var(--c1);
  border-right: 1px var(--c6) solid;
  & > ul {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: stretch;

    .selected {
      background-color: var(--c3);
    }

    & > li {
      height: 40px;
      line-height: 40px;
      text-align: center;
      &:hover {
        background-color: var(--c3);
      }
      & > a {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
`;
