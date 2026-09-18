import type { Post } from '../types/Post';
import PostItem from './Post';
import styles from '../styles/PostList.module.css';

const samplePosts: Post[] = [
  {
    id: 1,
    title: 'Your Frist Time Using TypeScript in React?',
    author: 'Atete Norette',
    content:
      'TypeScript adds static typing to JavaScript, which catches a huge class of bugs before you ever run your code. In this post I walk through setting up a React project with Vite and TypeScript from scratch...',
    datePosted: '2026-09-17T09:00:00Z',
  },
  {
    id: 2,
    title: 'All The Reasons Why Vite is Better',
    author: 'Atete Norette',
    content:
      'Vite uses native ES modules during development, which means near-instant server start and hot module replacement, unlike older bundler-based tools that rebuild the whole dependency graph...',
    datePosted: '2026-09-18T08:30:00Z',
  },
  {
    id: 3,
    title: 'What is React.memo and how do you use it',
    author: 'Amara Nkusi',
    content:
      'React.memo prevents a component from re-rendering if its props have not changed. It is not a silver bullet for performance, and overusing it can add unnecessary complexity...',
    datePosted: '2026-09-10T14:00:00Z',
  },
];

function PostList() {
  return (
    <section className={styles.postList}>
      {samplePosts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </section>
  );
}

export default PostList;