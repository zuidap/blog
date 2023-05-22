/** @format */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Divider } from 'antd';
import RightBox, { line } from './RightBox';
const data = [
  { title: '建站时间:', des: '2022.10-2022.12' },
  {
    title: '前端技术:',
    children: [
      { title: '开发框架:', des: 'React' },
      { title: '脚手架:', des: 'create-react-app' },
      { title: '组件库:', des: 'Antd' },
      { title: '语法扩展:', des: 'scss、TypeScript ' },
      { title: '打包工具:', des: 'Webpack ' },
      { title: '代码规范:', des: 'ESint、Prettier ' },
      { title: '代码规范1:', des: 'ESint、Prettier ' },
    ],
  },
  {
    title: '后端技术:',
    children: [
      { title: '主语言:', des: 'javaScript、Node.js' },
      { title: '开发框架:', des: 'Express' },
      { title: '数据库:', des: 'MongoDB' },
      { title: '文件储存:', des: '云服务器' },
    ],
  },
  {
    title: '本站介绍:',
    des: '本站记录个人工作开发中遇到的问题以及解决方法 ',
  },
];

function Introduction() {
  return (
    <RightBox title='本站介绍'>
      <Divider css={line} />
      <div style={{ marginTop: '5px' }}>
        {data.map((item, index) => {
          return <ItemBox key={index} item={item} />;
        })}
      </div>
    </RightBox>
  );
}

const ItemBox = ({ item, isChildren }) => {
  return (
    <div>
      <p
        css={css`
          line-height: 20px;
          margin-left: ${isChildren ? '20px' : ''};
        `}
      >
        <span
          css={css`
            margin-right: 5px;
            color: ${!isChildren ? 'var(--c2)' : ''};
          `}
        >
          {item.title}
        </span>
        {item.des && <span>{item.des}</span>}
      </p>
      {item.children?.map((childrenItem, index) => {
        return (
          <ItemBox key={index} item={childrenItem} isChildren={true}></ItemBox>
        );
      })}
    </div>
  );
};

export { Introduction };
