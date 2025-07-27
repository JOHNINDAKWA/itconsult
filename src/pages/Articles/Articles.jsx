// Articles.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Articles.css';
import { useArticles } from './ArticleContext';

const Articles = () => {
  const articles = useArticles();

  // Add a check to ensure articles is an array before mapping
  if (!articles || !Array.isArray(articles)) {
    return (
      <section className="articles-page-section">
        <div className="container">
          <div className="section-header text-center">
            <p className="section-subtitle">Insights & Expertise</p>
            <h1 className="section-title">Loading Articles...</h1>
          </div>
          <p className="text-center">No articles found or still loading.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="articles-page-section">
      <div className="container">
        <div className="section-header text-center">
          <p className="section-subtitle">Insights & Expertise</p>
          <h1 className="section-title">Our Latest Articles</h1>
        </div>

        <div className="articles-grid">
          {articles.map((article) => (
            <div key={article.id} className="article-card">
              <div className="article-image-wrapper">
                <img src={article.image} alt={article.title} className="article-image" />
              </div>
              <div className="article-content">
                <h3 className="article-title">{article.title}</h3>
                <div className="article-meta">
                  <span className="article-date">{article.date}</span>
                  <span className="article-separator">///</span>
                  <span className="article-comments">{article.comments}</span>
                </div>
                <p className="article-description">{article.description}</p>
                <Link to={`/articles/${article.id}`} className="read-more-link">
                  Read More &raquo;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;