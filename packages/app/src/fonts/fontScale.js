import { css } from '@emotion/core';

const IS_MOBILE = !window.matchMedia('(min-width: 768px)').matches;

export const LINE_HEIGHT = 1.5;
export const GRID_LINE_NUMBER = 1;
export const COEFFICIENT = IS_MOBILE ? 6 / 5 : 4 / 3;

export const GRID_LINE_HEIGHT = LINE_HEIGHT / GRID_LINE_NUMBER;

export const getLineSpace = space => Math.round(space / GRID_LINE_HEIGHT) * GRID_LINE_HEIGHT;

export const commonText = css`
  line-height: ${LINE_HEIGHT}em;
  font-size: 1em;
`;

export const p = css`
  ${commonText};
  margin-top: 0;
  margin-bottom: ${LINE_HEIGHT}em;
`;

const generateHeaderProps = factor => {
  const relativeFontSize = COEFFICIENT ** factor;
  const lineCoeff = (2 * relativeFontSize) / GRID_LINE_HEIGHT;
  const lineHeight = Math.ceil(1.2 * lineCoeff) / lineCoeff;
  const spaceCoeff = relativeFontSize / GRID_LINE_HEIGHT;
  const top = Math.round(1.5 * spaceCoeff) / spaceCoeff;
  const bottom = Math.max(Math.round(1 * spaceCoeff), factor > 0 ? 1 : 0) / spaceCoeff;
  return {
    fontSize: relativeFontSize,
    lineHeight,
    marginTop: top,
    marginBottom: bottom,
    fontWeight: 'inherit',
  };
};

const generateHeaderFont = props =>
  css`
    ${css({
      fontSize: `${props.fontSize}em`,
      lineHeight: `${props.lineHeight}em`,
      marginTop: `${props.marginTop}em`,
      marginBottom: `${props.marginBottom}em`,
      fontWeight: 'inherit',
    })};

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  `;

export const headerProps = {
  h1: generateHeaderProps(4 - 1),
  h2: generateHeaderProps(4 - 2),
  h3: generateHeaderProps(4 - 3),
  h4: generateHeaderProps(4 - 4),
  h5: generateHeaderProps(4 - 5),
  h6: generateHeaderProps(4 - 6),
};
export const h1 = generateHeaderFont(headerProps.h1);
export const h2 = generateHeaderFont(headerProps.h2);
export const h3 = generateHeaderFont(headerProps.h3);
export const h4 = generateHeaderFont(headerProps.h4);
export const h5 = generateHeaderFont(headerProps.h5);
export const h6 = generateHeaderFont(headerProps.h6);

export const AS_P_CLASSNAME = `__as__p__classname__`;
export const structuredWriting = css`
  ${commonText};

  h1 {
    ${h1};
  }

  h2 {
    ${h2};
  }

  h3 {
    ${h3};
  }

  h4 {
    ${h4};
  }

  h5 {
    ${h5};
  }

  h6 {
    ${h6};
  }

  ul {
    ${commonText};
    margin: ${getLineSpace(1)}em 0;
    line-height: 0em;

    li {
      line-height: 1.5em;
      margin: 0 0;
    }
  }

  p,
  blockquote,
  ${AS_P_CLASSNAME} {
    ${p};
    white-space: pre-line;

    &:last-child {
      margin-bottom: 0;
    }

    ul {
      margin: ${getLineSpace(1)}em 0 0;
    }
  }

  blockquote {
    border-left: 2px solid;
    margin-left: 1.5em;
    padding-left: 1.5em;
  }
`;
