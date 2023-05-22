/** @format */
'use client';
/** @jsxImportSource @emotion/react */
import LottieView from '@/components/commons/LottieView';
import Footer from '@/components/layout/footer';
import useWeather from '@/hook/useWeather';
import { css } from '@emotion/react';

function Leader() {
  const vm = useWeather();
  return (
    <div css={leader}>
      <div css={contain}>
        <h1 css={title}>敬请期待</h1>
        <div css={today}>
          <div>
            <LottieView jsonPath={vm.iconPath} />
          </div>
          <span>
            {vm.city}/温度：{vm.temp}°
          </span>
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
  margin-top: 20px;
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
