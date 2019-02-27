import React from 'react';

import { darken, lighten } from 'polished';

import Link from 'react-router-dom/Link';

import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { colors } from '../../theme';

export const ButtonClass = css`
  user-select: none;
  width: 100%;
  border: 0 none;
  height: 45px;
  padding: 0 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  background-color: ${colors.graphic.beige};
  color: ${colors.typographic.white};
  transition: background-color 0.4s, opacity, opacity 0.4s, opacity, filter 0.4s, color 0.4s;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: ${lighten(0.05, colors.graphic.beige)};
  }
  &:active {
    background-color: ${darken(0.05, colors.graphic.beige)};
    outline: none;
  }
  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    background-color: ${colors.graphic.grey};
  }
  &[disabled] {
    pointer-events: none;
  }
  &:focus {
    outline: none;
  }
`;

const iOS =
  !!navigator.platform &&
  typeof navigator !== 'undefined' &&
  /iPad|iPhone|iPod/.test(navigator.platform);
export const base = iOS ? 'div' : 'button';

const bgc = props => colors.graphic[props.bgc] || props.bgc || lighten(0.05, colors.graphic.beige);

export const Button = styled(base)`
  ${ButtonClass};
  background-color: ${bgc};
  :hover {
    background-color: ${props => lighten(0.05, bgc(props))};
  }
  :active {
    background-color: ${props => darken(0.05, bgc(props))};
  }
  &:disabled,
  &[disabled] {
    background-color: ${colors.graphic.grey};
    cursor: not-allowed;
  }
`;

Button.defaultProps = {
  bgc: 'beige',
};

export const AntiButton = styled(base)`
  ${ButtonClass};
  border: 1px solid ${bgc};
  background-color: transparent;
  color: ${bgc};
  &:hover {
    background-color: ${props => lighten(0.05, bgc(props))};
    border-color: ${props => lighten(0.05, bgc(props))};
  }
  &:active {
    background-color: ${props => darken(0.05, bgc(props))};
  }
  &:hover,
  &:active {
    color: ${colors.typographic.violet};
  }
  &:disabled,
  &[disabled] {
    background-color: transparent;
    border-color: ${colors.graphic.grey};
    color: ${colors.graphic.grey};
    cursor: not-allowed;
  }
`;

AntiButton.defaultProps = {
  color: 'beige',
};

// eslint-disable-next-line
const ELink = props => (props.to ? <Link {...props} /> : <a {...props} />);
export const LinkButton = Button.withComponent(ELink);
export const LinkAntiButton = AntiButton.withComponent(ELink);

export default Button;
