import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BlogPostDetail.css';

function BlogPostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch articles from articles.json
    fetch('/articles.json')
      .then(response => response.json())
      .then(data => {
        const fetchedPost = data.articles.find(post => post.id === parseInt(id, 10));
        setPost(fetchedPost);
      });
  }, [id]);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="post-detail">
      <div className="post-detail-banner">
        <img src={post.imgSrc} alt={post.title} />
      </div>
      <div className="post-detail-content">
        <h1 className="post-detail-title">{post.title}</h1>
        <p className={`post-detail-category ${post.categoryClass}`}>{post.category}</p>
        <p className="post-detail-hashtags">{post.hashtags}</p>
        <p className="post-detail-description">{post.description}</p>
        <p className="post-detail-writer">Written by: {post.writer}</p> {/* Display writer's name */}
      </div>
    </div>
  );
}

export default BlogPostDetail;
