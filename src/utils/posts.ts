export const getFavicon = (_url: string) => {
  const url = new URL(_url);
  const domain = url.hostname;

  return domain === 'qiita.com' ? '/qiita.png' : undefined;
};
