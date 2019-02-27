import React from 'react';

import { css } from '@emotion/core';

import { colors, screenSizes, spacing } from '../theme';

const ORGANIZERS = [
  {
    name: `Nicolas Giraudo`,
    title: 'Le Freelance grandiose',
    img:
      'http://www.eludice.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png',
  },
  {
    name: `Fabien Gréard`,
    title: 'Le CTO magique',
    img:
      'http://www.eludice.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png',
  },
  {
    name: `Jean de Campredon`,
    title: 'Le Lead Dev du futur',
    img:
      'http://www.eludice.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png',
  },
];

const TALKERS = [
  ...ORGANIZERS,
  {
    name: `Eric Müllenbach`,
    title: 'Le génie du chaos',
    img:
      'http://www.eludice.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png',
  },
  {
    name: `Daniil GORBATENKO `,
    title: 'Le libre analyste',
    img:
      'http://www.eludice.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png',
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
        {TALKERS.map(({ name, title, img }) => (
          <div css={user} key={name}>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{title}</p>
          </div>
        ))}
      </div>
      <h2 css={titleStyle}>ORGANISATEURS</h2>
      <div css={usersContainer}>
        {ORGANIZERS.map(({ name, title, img }) => (
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
