import React from 'react';

import { css } from '@emotion/core';

import wipSrc from '../../resources/images/work-in-progress.png';

const container = css`
  overflow: auto;
  flex: 1;
`;

const titleStyle = css`
  text-align: center;
`;

const imgStyle = css`
  display: block;
  margin: 0 auto;
`;

const Demos = () => {
  return (
    <div css={container}>
      <span />
      <h1 css={titleStyle}>DEMOS</h1>
      <img css={imgStyle} src={wipSrc} alt="" />
    </div>
  );
};

export default Demos;
