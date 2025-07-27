import React from 'react';
import { useParams } from 'react-router-dom'; // To get the article ID from the URL
import './ArticleDetail.css'; // Create this CSS file
import { useArticle } from './ArticleContext';
import ContactCtaSection from '../Home/ContactCtaSection/ContactCtaSection';
import { useEffect } from 'react';


const ArticleDetail = () => {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const article = useArticle(id); // Fetch the specific article using the ID

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  if (!article) {
    return (
      <div className="article-detail-page-wrapper">
        <div className="container" style={{ padding: '6rem 1.5rem', minHeight: '60vh', textAlign: 'center', color: 'var(--text-light)' }}>
          <h2>Article Not Found</h2>
          <p>The article you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <>
    <div className="article-detail-page-wrapper">
      <section className="article-detail-hero" style={{ backgroundImage: `url(${article.image})` }}>
        <div className="article-detail-overlay"></div>
        <div className="container article-detail-hero-content">
          <h1 className="article-detail-title">{article.title}</h1>
          <div className="article-detail-meta">
            <span>{article.date}</span>
            <span className="article-separator">///</span>
            <span>{article.comments}</span>
          </div>
        </div>
      </section>

      <section className="article-detail-content-section">
        <div className="container article-detail-body">
          {article.fullContent.map((paragraph, index) => (
            <p key={index} className="article-paragraph">{paragraph}</p>
          ))}
        </div>
      </section>

    </div>

   <ContactCtaSection/>
    </>
  );
};

export default ArticleDetail;
