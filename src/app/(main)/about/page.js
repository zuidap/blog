/** @format */
'use client';
/** @jsxImportSource @emotion/react */
import { add, subtract } from '@/store/slices/countSlice';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
export default function About() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.count);

  const addCount = () => {
    dispatch(add());
  };
  const subtractCount = () => {
    dispatch(subtract());
  };

  return (
    <div css={aboutStyle}>
      <h2>count:{count}</h2>
      <button onClick={addCount}>+</button>
      <button onClick={subtractCount}>-</button>
    </div>
  );
}

const aboutStyle = css`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > button {
    width: 60px;
  }
`;
