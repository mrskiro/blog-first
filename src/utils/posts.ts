import Parser from 'rss-parser';
import { compareDesc } from 'date-fns';
import { CMSData, Feed, Post } from '../types';

const getFeed = async () => {
  const parser = new Parser();
  const feed = await parser.parseURL('https://qiita.com/purpleeeee/feed.atom');
  return feed as Feed;
};

export const getPostsFromCMS = async () => {
  const key = { headers: { 'X-API-KEY': process.env.API_KEY! } };
  const data = await fetch('https://purpleeeee.microcms.io/api/v1/blogs', key)
    .then((res) => res.json())
    .catch(() => null);

  return data.contents as CMSData[];
};

export const getPostsFromCMSById = async (id: string, draftKey?: string) => {
  const previewKey = draftKey ? `?draftKey=${draftKey}` : '';
  const key = { headers: { 'X-API-KEY': process.env.API_KEY || '' } };
  const data = await fetch(`https://purpleeeee.microcms.io/api/v1/blogs/${id}${previewKey}`, key)
    .then((res) => res.json())
    .catch(() => null);

  return data as CMSData;
};

export const getDataFromFeedAndCMS = async () => {
  const _feed = await getFeed();
  const _cmsData = await getPostsFromCMS();

  const feed: Post[] = _feed.items.map((item) => {
    return {
      id: item.id,
      type: 'Feed',
      title: item.title,
      createdAt: new Date(item.isoDate),
      link: item.link,
    };
  });
  const cmsData: Post[] = _cmsData.map((item) => {
    return {
      id: item.id,
      type: 'CMS',
      title: item.title,
      description: item.description,
      createdAt: new Date(item.date),
    };
  });

  const result = [...feed, ...cmsData];
  result.sort((a, b) => compareDesc(a.createdAt, b.createdAt));

  return JSON.parse(JSON.stringify(result));
};

export const getFavicon = (_url: string) => {
  const url = new URL(_url);
  const domain = url.hostname;
  // Fix
  return domain === 'qiita.com' ? '/qiita.png' : '/profileIcon.jpeg';
};

export const getHostName = (_url: string) => {
  const url = new URL(_url);
  return url.hostname;
};
