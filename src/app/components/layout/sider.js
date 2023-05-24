/** @format */

'use client';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { title: '首页', path: '/' },
  { title: '笔记', path: '/article' },
  { title: '关于', path: '/about' },
  { title: '我的', path: '/mine' },
];

function Sider() {
  const pathname = usePathname();
  return (
    <div css={leftNavStyle}>
      <Image
        width={200}
        height={200}
        css={bgImgCss}
        src='https://iw233.cn/API/Random.php'
        alt=''
        priority={true}
      />
      <div css={leftContent}>
        <Image
          width={200}
          height={50}
          css={logoStyle}
          src='/icon/zuidap.svg'
          alt='logo'
          priority={true}
        />

        <ul>
          {navItems.map((item) => {
            var isActive = false;
            if (item.path === '/') {
              isActive = pathname === '/';
            } else {
              isActive = pathname.startsWith(item.path);
            }

            return (
              <li key={item.title} className={isActive ? 'selected' : ''}>
                <Link href={{ pathname: item.path }}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sider;

const leftNavStyle = css`
  flex: none;
  position: fixed;
  z-index: 100;
  width: 200px;
  height: 100vh;
  background-color: var(--c1);
  border-right: 1px var(--c6) solid;
`;

const bgImgCss = css`
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 1;
  opacity: 0.1;
  object-fit: fill;
`;

const logoStyle = css`
  object-fit: contain;
  display: block;
  margin: 20px auto;
`;

const leftContent = css`
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  & > ul {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: stretch;

    .selected {
      background-color: var(--c3);
    }

    & > li {
      margin-top: 2px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 8px;
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
