import { css } from "@emotion/react";
/** @description: h5页面 */
export const pageStyle = css`
  width: 100vw;
  height: 100vh;
  background-color: white;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

/** @description: login页面的背景图 */
export const bgImgStyle = css`
  position: absolute;
  object-fit: contain;
  z-index: 10;
  width: 100%;
  height: auto;
`;
/** @description: login页面登陆按钮 */
export const loginBtnStyle = css`
  width: 100%;
  height: 45px;
  line-height: 45px;
  background-color: var(--c1);
  color: white;
  text-align: center;
  font-size: 1.1rem;
  border-radius: 8px;
`;
