// eslint-disable-next-line import/prefer-default-export
export const transformUrl = (url) => {
  if (url.startsWith('https://author-')) {
    return url.replace(/\.json$/, '.infinity.json');
  }
  return url;
};
