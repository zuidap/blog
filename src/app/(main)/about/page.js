/** @format */
'use client';
import LocalStore from '@/store/localStore';
/** @jsxImportSource @emotion/react */
import { add, subtract } from '@/store/slices/countSlice';
import { css } from '@emotion/react';
import { redirect, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export default function About() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.count);
  useEffect(() => {
    if (count === 5) {
      dispatch(add());
      LocalStore.removeToken();
      redirect('/leader');
    }
  }, [count, dispatch]);

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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > button {
    width: 60px;
  }
`;
