import { css } from '@emotion/core';

export const LARGE_SCREEN = 1200;
export const BASE = 16;
export const DIFF = 6;

export const fluidTypography = css`
  font-size: ${BASE}px;
  @media screen and (min-width: 1200px) {
    font-size: calc(${BASE}px + ${DIFF} * ((100vw - 1200px) / 2048));
  }
  @media screen and (min-width: 3248px) {
    font-size: ${BASE + DIFF}px;
  }
`;
