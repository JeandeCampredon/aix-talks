import bowser from 'bowser';

import { css } from '@emotion/core';

import * as fontScale from '../fonts/fontScale';
import { MAX_WIDTH, PERCENT_WIDTH } from './constants';

export const HORIZONTAL_PADDING_SECTION = bowser.mobile ? fontScale.getLineSpace(1) : 0;

export default css`
  padding-right: ${HORIZONTAL_PADDING_SECTION}em;
  padding-left: ${HORIZONTAL_PADDING_SECTION}em;
  align-self: center;
  width: ${PERCENT_WIDTH}%;
  max-width: ${MAX_WIDTH / 17}em;
  margin: 0 auto;
`;
