/** @format */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
export default function Header() {
  const pathname = usePathname();
  return (
    <div css={header}>
      <h3 style={{ float: 'left', lineHeight: '64px' }}>{pathname}</h3>
      <div css={right}>
        <div css={setting}></div>
      </div>
      <div css={avatar}>
        <Image width={40} height={40} src='/icon/header.jpg' alt='avatar' />
      </div>
    </div>
  );
}
const header = css`
  width: 100%;
  height: 64px;
  background-color: var(--c2);
  color: var(--c3);
  position: absolute;
  opacity: 0.8;
`;

const right = css``;

const setting = css``;

const avatar = css`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  overflow: hidden;
  float: right;
  margin-top: 12px;
  margin-right: 20px;
`;
