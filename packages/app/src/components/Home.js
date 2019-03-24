import React from 'react';

import { Link } from 'react-router-dom';

import { css } from '@emotion/core';

import AixTalks from '../../resources/icons/aix-talks.svg';
import Aix from '../../resources/images/aix.jpeg';
import Community from '../../resources/images/community.jpg';
import Conference from '../../resources/images/conference.jpeg';
import Happiness from '../../resources/images/happiness.jpg';
import { colors, screenSizes, screenSizesUnit, screenSizesValues, spacing } from '../theme';
import { LinkAntiButton } from './UI/Button';

const tinyMax = `@media (max-width: ${screenSizes.tiny})`;
const smallMax = `@media (max-width: ${screenSizes.small})`;
const ipadMax = `@media (max-width: ${screenSizes.ipad})`;
const overIpad = `@media (min-width: ${screenSizesValues.ipad + 0.01}em)`;

const homeContainer = css`
  height: 100%;
  overflow: auto;
`;

const heroStyle = css`
  width: 100vw;
  max-height: 100vw;
  height: 80%;
  background: url('${AixTalks}');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  a {
    margin-bottom: ${spacing.l};
    width: auto;

    ${ipadMax} {
      margin-bottom: ${spacing.m};
    }
  }
`;

const sectionClass = css`
  padding: ${spacing.l} 10%;

  ${ipadMax} {
    padding: ${spacing.m} 10%;
  }

  ${smallMax} {
    padding: ${spacing.m} ${spacing.s};
  }

  ${tinyMax} {
    padding: ${spacing.m} 0;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

const nextEventSection = css`
  ${sectionClass};
  background-color: ${colors.graphic.lighterGrey};
  color: ${colors.typographic.darkGrey};
  text-align: center;
`;

const descriptionSection = css`
  ${sectionClass};
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${screenSizesValues.landscapeIpad * 2 + screenSizesUnit};
  border-top: 1px solid ${colors.graphic.lighterGrey};

  &::before {
    content: ' ';
  }

  > * {
    margin: ${spacing.m};
  }

  img,
  iframe {
    width: 40%;
    border-radius: 2%;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.8);
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
    text-align: right;

    li {
      direction: ltr;
    }
  }

  ${ipadMax} {
    display: block;
    position: relative;

    img,
    iframe {
      width: calc(100% - 3em);
      height: auto;
    }

    &,
    &:nth-child(even) {
      text-align: center;
      li {
        direction: ltr;
      }
    }
  }
`;

const textSection = css`
  ${overIpad} {
    max-width: 30em;
  }

  a {
    color: ${colors.typographic.violet};
  }

  p,
  li {
    color: ${colors.typographic.grey};
  }
`;

const oneDate = new Date(2019, 0, 17, 23);
const nbOfMsByDay = 24 * 60 * 60 * 1000;
const formatter = new Intl.DateTimeFormat('fr-FR', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
});
const nowDate = Date.now();
const nbOfDays = (nowDate.valueOf() - oneDate.valueOf()) / nbOfMsByDay;
const nextDate = new Date(oneDate);
nextDate.setDate(nextDate.getDate() + Math.ceil(nbOfDays / 14) * 14);
const nextDay = formatter.format(nextDate).toUpperCase();

const Home = () => {
  return (
    <div css={homeContainer}>
      <section src={AixTalks} css={heroStyle}>
        <LinkAntiButton to="/content">LES TALKS</LinkAntiButton>
      </section>
      <section css={nextEventSection}>
        <h3>
          PROCHAINE ÉDITION <br />
          <strong>{nextDay} À 19H</strong>
        </h3>
      </section>
      <section css={descriptionSection}>
        <div css={textSection}>
          <h2>L'EVENEMENT TECH/STARTUP</h2>
          <p>
            Aix Talks, c'est enfin un événement quinzomadaire sur Aix pour les développeurs et
            startupers{' '}
            <span role="img" aria-label="freaking-out">
              😱
            </span>
          </p>
          <p>
            C'est 1 thème, 4 talks, 4 sujets, 4 fois plus de chance d'apprendre, de découvrir et de
            s'investir.
          </p>
        </div>
        <img src={Aix} alt="" />
      </section>
      <section css={descriptionSection}>
        <div css={textSection}>
          <h2>DES CONFERENCES POUR TOUS</h2>
          <p>
            Les intervenants se succèdent pour présenter en 10 minutes un sujet de leur choix
            (language, méthode de programmation, projet perso, design, digitalisation des
            entreprises...)
          </p>
          <p>
            Quel que soit votre niveau vous pouvez proposer un talk aux organisateurs des Aix Talks.
          </p>
        </div>
        <img src={Conference} alt="" />
      </section>
      <section css={descriptionSection}>
        <div css={textSection}>
          <h2>DES VIDEOS ET DES DEMOS</h2>
          <p>Tous nos talks sont filmés et enregistrés. Le temps de les monter et retrouvez les:</p>
          <ul>
            <li>
              <Link to="/content/talks">dans notre section dédiée</Link>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCf0jbgBHGxgpVQz0WvDgcHA"
                target="_blank"
                rel="noopener noreferrer"
              >
                sur notre chaine youtube
              </a>
            </li>
          </ul>
          <p>Les talks techniques sont supportés par une démonstration technique:</p>
          <ul>
            <li>
              <Link to="/content/demos">live dans notre section dédiée</Link>
            </li>
            <li>
              <Link to="/content/talks">open source sur github</Link>
            </li>
          </ul>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CkhHnTwnReY"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          title="talks video"
          allowFullScreen
        />
      </section>
      <section css={descriptionSection}>
        <div css={textSection}>
          <h2>DES PASSIONEES ET EXPERTS</h2>
          <p>
            Venez partager avec une communauté passionée. Que vous pouvez rejoindre{' '}
            <Link to="content/community">dans notre section dédié</Link>
          </p>
          <p>Ou poser vos questions les plus pointues à nos experts.</p>
        </div>
        <img src={Community} alt="" />
      </section>
      <section css={descriptionSection}>
        <div css={textSection}>
          <h2>TOUJOURS DE LA BONNE HUMEUR</h2>
          <p>Venez partager un moment conviviale avec des gens de tous horizons.</p>
          <p>Allez viens ! on est bien bien bien bien bien !</p>
        </div>
        <img src={Happiness} alt="" />
      </section>
    </div>
  );
};

export default Home;
