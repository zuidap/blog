/** @format */

'use client';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Spin } from 'antd';
export default function Loading() {
  return (
    <div
      css={css`
        width: 100px;
        height: 100px;
        margin: 100px auto;
      `}
    >
      <Spin size='large' />
    </div>
  );
}
