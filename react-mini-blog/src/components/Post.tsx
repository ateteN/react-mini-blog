import { memo } from 'react';
import type { Post as PostType } from '../types/Post';
import styles from '../styles/Post.module.css';

interface PostProps {
  post: PostType;
}

const FEATURED_AUTHOR = 'Atete Norette';

function isNew(datePosted: string): boolean {
  const posted = new Date(datePosted).getTime();
  const now = Date.now();
  const oneDayMs = 24 * 60 * 60 * 1000;
  return now - posted < oneDayMs;
}

function getPreview(content: string, wordCount = 12): string {
  const words = content.trim().split(/\s+/);
  if (words.length <= wordCount) return content;
  return words.slice(0, wordCount).join(' ') + '...';
}

function PostComponent({ post }: PostProps) {
  const isFeaturedAuthor = post.author === FEATURED_AUTHOR;
  const highlightStyle = isFeaturedAuthor
    ? { backgroundColor: '#fef3c7', borderLeft: '4px solid #f59e0b' }
    : {};

  return (
    <article className={styles.post} style={highlightStyle}>
      <div className={styles.postHeader}>
        <h2 className={styles.title}>{post.title}</h2>
        {isNew(post.datePosted) && <span className={styles.badge}>New!</span>}
      </div>
      <p className={styles.meta}>
        By {post.author} - {new Date(post.datePosted).toLocaleDateString()}
      </p>
      <p className={styles.preview}>{getPreview(post.content)}</p>
    </article>
  );
}

const Post = memo(PostComponent);

export default Post;