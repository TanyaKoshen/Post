import {useMemo} from 'react';

export const useSortedPosts = (posts, sort) => {

  const sortedList = useMemo(() => {
    if (sort) {
      return posts.sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts
  }, [sort, posts]);

  return sortedList;
};

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort)
  const sortedAndFilteredPosts = useMemo(() => {
    return sortedPosts.filter(el => el.title.toLowerCase().includes(query))
  }, [query, posts]);

  return sortedAndFilteredPosts;
}
