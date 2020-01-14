import React from 'react';

import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import RRPT from 'react-router-prop-types';

import { ClassNames, css } from '@emotion/core';

import AixTalks from '../../../resources/icons/aix-talks.svg';
import { colors } from '../../theme';
import Contact from '../Contact';
import Community from '../Community';
import Demos from '../Demos';
import Talks from '../Talks';

const TABS = [
  {
    name: 'talks',
    pathname: 'talks',
    component: Talks,
  },
  {
    name: 'demos',
    pathname: 'demos',
    component: Demos,
  },
  {
    name: 'communauté',
    pathname: 'community',
    component: Community,
  },
  {
    name: 'contact',
    pathname: 'contact',
    component: Contact,
  },
];

const getPathname = (match, pathname) => `${match.url}/${pathname}`;

const container = css`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const menuClass = css`
  display: flex;
  background-color: ${colors.graphic.violet};
  align-items: center;
  color: ${colors.graphic.beige};
  height: 4.5em;
  user-select: none;

  img {
    height: 4.5em;
    width: auto;
  }

  a,
  a:hover {
    flex-shrink: 0;
    padding: 1em 0 1em 2em;
    outline: none;
    text-transform: uppercase;
  }
`;

const ContentSwitch = ({ match }) => {
  return (
    <div css={container}>
      <ClassNames>
        {({ css }) => {
          const activeClass = css`
            font-weight: 400;
            &,
            &:hover {
              text-decoration: none;
            }
          `;
          return (
            <div css={menuClass}>
              {TABS.map(({ pathname, name }, index) => (
                <NavLink key={index} to={getPathname(match, pathname)} activeClassName={activeClass}>
                  {name}
                </NavLink>
              ))}
              <div
                css={css`
                  flex: 1;
                `}
              />
              <Link to="/">
                <img src={AixTalks} alt="" />
              </Link>
            </div>
          );
        }}
      </ClassNames>
      <Switch>
        {TABS.map(({ pathname, name, component }, index) => (
          <Route key={index} exact path={getPathname(match, pathname)} component={component || (() => name)} />
        ))}
        <Redirect path="*" to={getPathname(match, TABS[0].pathname)} />
      </Switch>
    </div>
  );
};

ContentSwitch.propTypes = {
  match: RRPT.match,
};

export default ContentSwitch;
