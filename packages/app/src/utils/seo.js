export const intlTranslate = intl => message =>
  message && message.id ? intl.formatMessage(message) : message;

export const getAbsoluteImagePath = (path, base) =>
  path.startsWith('/') ? `${base}${path}` : `${path}`;

export const GOOGLE_LENGTH = {
  title: 65,
  description: 140,
};
export const OG_NAMES = ['title', 'description', 'image', 'site_name', 'type', 'url'];
export const TWITTER_NAMES = ['title', 'description', 'card', 'creator', 'image', 'site'];

export const getDataOutOfNames = ({ data, names, baseUrl, translate }) => {
  data.image = getAbsoluteImagePath((data && data.image) || '', baseUrl);
  return names.reduce((prev, field) => {
    const value = translate(data[field]);
    return value
      ? {
          ...prev,
          [field]: value,
        }
      : prev;
  }, {});
};

export const normalizeSeoData = ({ rawData, baseUrl, intl }) => {
  const translate = intlTranslate(intl);
  const { title, description, canonical, og, twitter } = rawData;
  const searchData = {
    title: translate(title || '').slice(0, GOOGLE_LENGTH.title),
    description: translate(title || '').slice(0, GOOGLE_LENGTH.description),
    canonical,
  };
  const ogData = getDataOutOfNames({
    data: {
      title,
      description,
      url: canonical,
      ...og,
    },
    names: OG_NAMES,
    baseUrl,
    translate,
  });
  const twitterData = getDataOutOfNames({
    data: {
      ...og,
      title,
      description,
      ...twitter,
    },
    names: TWITTER_NAMES,
    baseUrl,
    translate,
  });

  return {
    searchData,
    ogData,
    twitterData,
  };
};
