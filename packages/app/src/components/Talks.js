import React from 'react';

import { css } from '@emotion/core';

import { colors, screenSizes, spacing } from '../theme';

const VIDEOS = [
  {
    url: 'https://www.youtube.com/embed/-V7gPYVHpmQ',
    name: 'ELECTON JS',
    author: `Jean de Campredon`,
  },

  {
    url: 'https://www.youtube.com/embed/y_aEERseDkk',
    name: 'MY PERCEPTION OF THE UPCOMING INNOVATIVE BLOCKCHAIN PLATFORMS',
    author: `Daniil Gorbatenko`,
  },
  {
    url: 'https://www.youtube.com/embed/KJQgRN3C_oM',
    name: 'WEB COMPONENTS',
    author: `Nicolas Giraudo`,
  },
  {
    url: 'https://www.youtube.com/embed/CkhHnTwnReY',
    name: 'JAVASCRIPT TOOLING TRICK AND TREAT',
    author: `Fabien Gréard`,
  },
  {
    url: 'https://www.youtube.com/embed/NTAGHzNa1to',
    name: 'EVENT LOOP',
    author: `Jean de Campredon`,
  },
];

const container = css`
  overflow: auto;
  flex: 1;
`;
const titleStyle = css`
  text-align: center;
`;

const videosContainer = css`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  max-width: ${screenSizes.landscapeIpad};
  margin: 0 auto;

  > * {
    margin: ${spacing.m} ${spacing.sm};
  }
`;

const videoContainer = css`
  width: 280px;

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

const Talks = () => {
  return (
    <div css={container}>
      <span />
      <h1 css={titleStyle}>TALKS</h1>
      <div css={videosContainer}>
        {VIDEOS.map(({ url, name, author }) => (
          <div css={videoContainer}>
            <iframe
              key={url}
              title={name}
              width="280"
              height="160"
              src={url}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <h3>{name}</h3>
            <p>par {author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Talks;
