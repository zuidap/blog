/** @format */
'use client';
/** @jsxImportSource @emotion/react */
import MdBox from '@/components/mdDetail/MdBox';
import useTheme from '@/theme/useTheme';
import { css } from '@emotion/react';
import { Spin } from 'antd';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
export default function ArticleDetail({ params }) {
  const theme = useTheme();
  const [source, setSource] = useState();
  const { id } = params;

  const getMd = useCallback(async () => {
    console.log('id:', id);
    const res = await axios.get(`/articles/${id}.md`);
    const data = await res.data;
    setSource(data);
  }, [id]);

  useEffect(() => {
    getMd();
  }, [getMd]);

  return (
    <div css={detailStyle}>
      {source ? <MdBox source={source} isDark={theme.isDark} /> : <Spin />}
    </div>
  );
}

const detailStyle = css`
  padding: 20px 20px 80px 20px;
  min-height: 100%;
  color: var(--c5);
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--c2);
  }
`;
