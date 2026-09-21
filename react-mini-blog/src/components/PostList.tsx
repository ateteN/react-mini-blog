import { useState } from 'react';
import type { Post } from '../types/Post';
import PostItem from './Post';
import styles from '../styles/PostList.module.css';

const samplePosts: Post[] = [
  {
    id: 1,
    title: 'Here Is What To Look Out For in TypeScript',
    author: 'Atete Norette',
    content:
      'TypeScript adds static typing to JavaScript, which catches a huge class of bugs before you ever run your code. In this post I walk through setting up a React project with Vite and TypeScript from scratch...',
    datePosted: '2026-09-17T09:00:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    topic: 'TypeScript',
  },
  {
    id: 2,
    title: 'All The Reasons Why Vite is Better',
    author: 'Isimbi Emmanuella',
    content:
      'Vite uses native ES modules during development, which means...',
    datePosted: '2026-09-18T08:30:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    topic: 'Tooling',
  },
  {
    id: 3,
    title: 'What is React Memo and how do you use it?',
    author: 'Amara Nkusi',
    content:
      'React memo prevents a component from re-rendering if its props have not changed...',
    datePosted: '2026-09-10T14:00:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
    topic: 'React',
  },
  {
    id: 4,
    title: 'How to Master Modern CSS Grid and Flexbox',
    author: 'Kwame Mensah',
    content:
      'Modern CSS layout engines provide immense power without relying on bulky CSS frameworks...',
    datePosted: '2026-09-14T11:20:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    topic: 'CSS',
  },
  {
    id: 5,
    title: 'Clean Architecture in Frontend Applications',
    author: 'Atete Norette',
    content:
      'Separating business logic from UI components leads to highly testable, scalable, and...',
    datePosted: '2026-09-16T15:45:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    topic: 'Architecture',
  },
  {
    id: 6,
    title: 'Building Accessible Component Libraries',
    author: 'Amara Nkusi',
    content:
      'Accessibility should never be an afterthought. By utilizing semantic HTML elements, ARIA attributes...',
    datePosted: '2026-09-21T10:00:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
    topic: 'Accessibility',
  },
];

const TOPICS = ['All', 'TypeScript', 'Tooling', 'React', 'CSS', 'Architecture', 'Accessibility'];

function PostList() {
  const [selectedTopic, setSelectedTopic] = useState('All');

  const filteredPosts =
    selectedTopic === 'All'
      ? samplePosts
      : samplePosts.filter((post) => post.topic === selectedTopic);

  return (
    <section className={styles.section}>
      <div className={styles.filterBar}>
        {TOPICS.map((topic) => (
          <button
            key={topic}
            type="button"
            className={`${styles.filterButton} ${selectedTopic === topic ? styles.activeFilter : ''}`}
            onClick={() => setSelectedTopic(topic)}
          >
            {topic}
          </button>
        ))}
      </div>
      <div className={styles.postList}>
        {filteredPosts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default PostList;