import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch('/articles.json')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.articles)) {
          setBlogPosts(data.articles);
        } else {
          console.error("Fetched data is not an array", data);
        }
      })
      .catch((error) => console.error('Error fetching articles:', error));
  }, []);

  return (
    <div className="blog-container">
      <div className="posts-wrapper">
        {blogPosts.map((post) => (
          <div className="card" key={post.id}>
            <div className="card-banner">
              <p className={`category-tag ${post.categoryClass}`}>{post.category}</p>
              <img className="banner-img" src={post.imgSrc} alt={post.category} />
            </div>
            <div className="card-body">
              <p className="blog-hashtag">{post.hashtags}</p>
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-description">
                {post.description.substring(0, 100)}...{' '}
                <Link to={`/post/${post.id}`} className="link-blog">
                  Read More
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
