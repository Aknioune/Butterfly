import React, { useState } from 'react';
import './AddArticle.css';

function AddArticle() {
  const [article, setArticle] = useState({
    title: '',
    category: '',
    imgSrc: '',
    hashtags: '',
    description: '',
    writer: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle({
      ...article,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate adding the article to the articles array
    console.log('New Article:', article);
    // Normally, here you would send the article to a backend to save it to the JSON file
    setArticle({
      title: '',
      category: '',
      imgSrc: '',
      hashtags: '',
      description: '',
      writer: '',
    });
  };

  return (
    <div className="add-article-container">
      <h1>Add New Article</h1>
      <form onSubmit={handleSubmit} className="add-article-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={article.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={article.category}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="imgSrc"
          placeholder="Image URL"
          value={article.imgSrc}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="hashtags"
          placeholder="Hashtags"
          value={article.hashtags}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Article Description"
          value={article.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="writer"
          placeholder="Writer's Name"
          value={article.writer}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Article</button>
      </form>
    </div>
  );
}

export default AddArticle;
