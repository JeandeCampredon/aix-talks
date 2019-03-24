import React from 'react';

import { css } from '@emotion/core';

import defaultUserSrc from '../../resources/icons/default-user-image.png';
import { colors, screenSizes, spacing } from '../theme';

const ORGANIZERS = [
  {
    name: `Nicolas Giraudo`,
    title: 'Le Freelance grandiose',
  },
  {
    name: `Fabien Gréard`,
    title: 'Le CTO magique',
  },
  {
    name: `Jean de Campredon`,
    title: 'Le Lead Dev du futur',
  },
];

const TALKERS = [
  ...ORGANIZERS,
  {
    name: `Eric Müllenbach`,
    title: 'Le génie du chaos',
  },
  {
    name: `Daniil GORBATENKO `,
    title: 'Le libre analyste',
  },
];

const container = css`
  overflow: auto;
  flex: 1;
`;
const titleStyle = css`
  text-align: center;
`;

const usersContainer = css`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  max-width: ${screenSizes.landscapeIpad};
  margin: 0 auto;

  > * {
    margin: ${spacing.m} ${spacing.sm};
  }
`;

const user = css`
  width: 280px;
  text-align: center;

  img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
  }

  h3 {
    font-weight: 400;
    white-space: no-wrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    color: ${colors.typographic.grey};
  }
`;

const Community = () => {
  return (
    <div css={container}>
      <span />
      <h1 css={titleStyle}>COMMUNAUTÉ</h1>
      <h2 css={titleStyle}>INTERVENANTS</h2>
      <div css={usersContainer}>
        {TALKERS.map(({ name, title, img = defaultUserSrc }) => (
          <div css={user} key={name}>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{title}</p>
          </div>
        ))}
      </div>
      <h2 css={titleStyle}>ORGANISATEURS</h2>
      <div css={usersContainer}>
        {ORGANIZERS.map(({ name, title, img = defaultUserSrc }) => (
          <div css={user} key={name}>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
