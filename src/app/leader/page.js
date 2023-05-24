/** @format */
'use client';
/** @jsxImportSource @emotion/react */
import LottieView from '@/app/components/commons/LottieView';
import Footer from '@/app/components/layout/footer';
import useWeather from '@/hook/useWeather';
import LocalStore from '@/store/localStore';
import { css } from '@emotion/react';
import { redirect, useRouter } from 'next/navigation';
import { useEffect } from 'react';
function Leader() {
  const vm = useWeather();
  const router = useRouter();
  useEffect(() => {
    if (LocalStore.isLogin()) {
      redirect('/');
    }
  }, []);
  return (
    <div css={leader}>
      <div css={contain}>
        {/* <h1 css={title}>敬请期待</h1> */}
        <div css={today}>
          <div>
            <LottieView jsonPath={vm.iconPath} />
          </div>
          <span>
            {vm.city}/温度：{vm.temp}°
          </span>
        </div>

        <div
          css={startBtn}
          onClick={() => {
            LocalStore.setToken('login');
            router.push('/');
          }}
        >
          开始吧
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Leader;

const leader = css`
  width: 100vw;
  height: 100vh;
  background-color: #121828;
  overflow: hidden;
`;

const contain = css`
  min-height: calc(100vh - 85px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const title = css`
  margin: 0 auto;
  margin-top: 6rem;
  text-align: center;
  font-size: 30px;
  color: skyblue;
`;
const today = css`
  margin-top: 80px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    width: 80px;
    height: 80px;
    margin-bottom: -10px;
  }
  & > span {
    z-index: 20;
    font-size: 12px;
  }
`;

const startBtn = css`
  width: 270px;
  height: 90px;
  background-color: #3874cb;
  color: white;
  text-align: center;
  line-height: 90px;
  border-radius: 12px;
  font-size: 25px;
  margin-top: 100px;
  &:hover {
    background-color: #3063ba;
  }
`;
