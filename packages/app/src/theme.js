export * as commonStyles from './commonStyles/index';

export const colors = {
  typographic: {
    white: '#FFFFFF',
    black: '#232323',

    lighterGrey: '#F3F3F3',
    lightGrey: '#DADADA',
    grey: '#999999',
    darkGrey: '#4A4A4A',
    darkerGrey: '#2E3033',

    violet: '#681F4B',
    beige: '#F6E0D5',
  },
  graphic: {
    white: '#FFFFFF',
    black: '#000000',

    lighterGrey: '#F3F3F3',
    lightGrey: '#999999',
    grey: '#757575',
    darkGrey: '#4A4A4A',
    darkerGrey: '#2E3033',

    violet: '#681F4B',
    beige: '#F6E0D5',
  },
};

const makeCssObject = (obj, unit) =>
  Object.entries(obj).reduce((prev, [key, value]) => ({ ...prev, [key]: `${value}${unit}` }), {});

export const screenSizesUnit = 'em';
export const screenSizesValues = {
  tiny: 22.5,
  small: 33.75,
  ipad: 48,
  landscapeIpad: 64,
  laptop: 80,
};
export const screenSizes = makeCssObject(screenSizesValues, screenSizesUnit);

export const spacingUnit = 'em';
export const spacingValue = {
  xs: 0.25,
  s: 0.5,
  sm: 1,
  m: 1.5,
  l: 3,
  xl: 4.5,
};
export const spacing = makeCssObject(spacingValue, spacingUnit);
