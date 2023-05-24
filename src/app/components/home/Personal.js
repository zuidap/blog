/** @format */
/** @jsxImportSource @emotion/react */
import { QqCircleFilled, WechatFilled } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Avatar, Divider } from 'antd';
import Image from 'next/image';
import RightBox, { line } from './RightBox';
const Button = ({ name, count }) => {
  return (
    <li>
      <p>{count}</p> <p>{name}</p>
    </li>
  );
};

function Personal() {
  return (
    <RightBox style={{ padding: '0' }}>
      <Image
        css={bgImgCss}
        width={200}
        height={200}
        src='https://iw233.cn/API/Random.php'
        alt=''
        priority={true}
      />
      <div css={content}>
        <h4>关于</h4>
        <Divider css={line} />
        <div css={description}>
          <Avatar
            css={avatar}
            src={<Image src='/icon/header.jpg' alt='avatar' />}
          ></Avatar>
          <div>
            <h4>zuidap</h4>
            <p>
              前端开发工程师,2015年毕业于&apos;邢台学院&apos;,专业&apos;计算机信息与技术&apos;,2015.7-至今从事前端、移动端开发工作。
              <a href='#javaScript:'>{`了解更多>>`}</a>
            </p>
          </div>
        </div>
        <Divider css={line} dashed={true} />

        <ul css={siteData}>
          <Button name={'博文'} count={'30'} />
          <Button name={'阅读'} count={'305'} />
          <Button name={'评论'} count={'8'} />
        </ul>
        <Divider css={line} dashed={true} />

        <ul css={connect}>
          <li css={button}>
            <WechatFilled
              css={css`
                color: #9ace59;
                font-size: 1.5rem;
              `}
            />
            <span>微信</span>
            <span style={{ marginTop: '6px' }}>zuidap_1</span>
          </li>
          <li css={button}>
            <QqCircleFilled
              css={css`
                color: #6bb6e8;
                font-size: 1.5rem;
              `}
            />
            <span>QQ</span>
            <span style={{ marginTop: '6px' }}>1179659321</span>
          </li>
        </ul>
      </div>
    </RightBox>
  );
}
export { Personal };

const bgImgCss = css`
  position: absolute;
  height: 100%;
  width: 100%;
  display: block;
  z-index: 1;
  opacity: 0.1;
  object-fit: cover;
`;
const content = css`
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
`;

const description = css`
  margin-top: 5px;
  display: flex;
  h4,
  a {
    color: var(--c2);
  }
  p {
    margin-top: -10px;
  }
`;

const avatar = css`
  flex: none;
  width: 50px;
  height: 50px;
  border: 1px solid lightgray;
  box-shadow: 0 0 3px lightgray;
  overflow: hidden;
  margin-top: 10px;
  margin-right: 15px;
`;

const siteData = css`
  margin: 5px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  li {
    text-align: center;
    line-height: 20px;
  }
`;

const connect = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0.1px;
`;

const button = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
