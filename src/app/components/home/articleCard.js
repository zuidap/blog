/** @format */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Image from 'next/image';
import {
  AiOutlineClockCircle,
  AiOutlineComment,
  AiOutlineEye,
} from 'react-icons/ai';
function ArticleCard() {
  return (
    <a href={'/blog/article/2'}>
      <div css={articleCard}>
        <Image
          width={230}
          height={150}
          css={articleImage}
          src='/icon/article.jpeg'
          alt='1'
        />
        <div css={content}>
          <div css={name} className='selected'>
            vue2+ts笔记
          </div>
          <p>
            初次接触react，做一个自己的博客网站，来学习、记录dasdadfsafdsafdsfdsadfasdfsdfdsafds。
          </p>
          <Bottom
            label={'react'}
            time={'2022-10-06'}
            comment={'20'}
            read={'49'}
          />
        </div>
      </div>
    </a>
  );
}

const Bottom = ({ label, time, comment, read }) => {
  return (
    <div css={bottom}>
      <span>标签:({label})</span>
      <div className='bottom-label'>
        <span>
          <AiOutlineClockCircle />
          {time}
        </span>
        <span>
          <AiOutlineComment />
          {comment}
        </span>
        <span>
          <AiOutlineEye />
          {read}
        </span>
      </div>
    </div>
  );
};

export { ArticleCard };

const articleCard = css`
  width: 100%;
  height: 190px;
  min-width: 340px;
  padding: 10px;
  border: 1px solid var(--c6);
  border-radius: 4px;
  box-shadow: 0 0 1px 1px var(--c6);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: var(--c3);
  &:hover {
    .selected {
      color: var(--c2);
    }
  }
`;

const articleImage = css`
  margin: 5px;
  margin-right: 15px;
  width: 230px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const content = css`
  flex: 1;
  height: 100%;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--c5);
`;

const name = css`
  font-size: 1.3rem;
  color: var(--c4);
  font-weight: 700;
`;

const bottom = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 0.8rem;
  .bottom-label {
    display: flex;
    flex-direction: row;
    & > * {
      margin: 0 8px;
      & > * {
        margin: 0 3px;
      }
    }
  }
`;
