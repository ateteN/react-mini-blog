import { memo } from 'react';
import type { Post as PostType } from '../types/Post';
import styles from '../styles/Post.module.css';

interface PostProps {
  post: PostType;
}

export const FEATURED_AUTHOR = 'Atete Norette';

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
    ? { backgroundColor: '#feeac7ff' }
    : {};

  return (
    <article className={styles.post} style={highlightStyle}>
      {post.imageUrl && (
        <div className={styles.imageWrapper}>
          <img src={post.imageUrl} alt={post.title} className={styles.postImage} loading="lazy" />
        </div>
      )}
      <div className={styles.postHeader}>
        <h2 className={styles.title}>{post.title}</h2>
        {isNew(post.datePosted) && <span className={styles.badge}>New!</span>}
      </div>
      <p className={styles.meta}>
        By {post.author} - {new Date(post.datePosted).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        {post.topic && <span className={styles.topic}>#{post.topic.toUpperCase()}</span>}
      </p>
      <p className={styles.preview}>{getPreview(post.content)}</p>
    </article>
  );
}

const Post = memo(PostComponent);

export default Post;