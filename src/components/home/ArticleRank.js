/**
 * @format
 * @jsxImportSource @emotion/react
 */

import { EyeOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Divider } from 'antd';
import IconP from '../../commons/IconP';
import RightBox, { line, line2 } from './RightBox';
const data = [
  { title: 'React入门', readCount: 1230, like: true },
  { title: 'Node.js基础学习', readCount: 1230, like: false },
  { title: '前端知识汇总', readCount: 2230, like: true },
  { title: 'styled-components', readCount: 1530, like: false },
  { title: 'reactNative', readCount: 3230, like: true },
  { title: 'reactNative环境搭建', readCount: 3230, like: true },
  { title: 'reactNative-ios', readCount: 3230, like: true },
  { title: 'ES6基础1', readCount: 3230, like: true },
  { title: 'ES6基础2', readCount: 3230, like: true },
];

function ArticleRank() {
  return (
    <RightBox title='点击排行'>
      <Divider css={line} />
      {data.map((item) => {
        return (
          <div css={row} key={item.title}>
            <span className='row-name'>{item.title}</span>
            {item.like && (
              <IconP icon={'icon-tuijian'} style={{ fontSize: '30px' }} />
            )}
            <Divider css={line2} dashed={true} />
            <EyeOutlined />
            <span>{item.readCount}</span>
          </div>
        );
      })}
    </RightBox>
  );
}

export { ArticleRank };

const row = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  line-height: 30px;
  .row-name {
    flex: 1 1 none;
    margin-right: 1px;
  }
`;
