import { useLocation } from 'react-router-dom';

function Post() {
  const location = useLocation();
  const article = location.state.article;
  return (
    <section className='story'>
        <img className='story__img' src={article.picture} alt='visual of the post' />
        <div className="story__text-container">
          <h1 className="story__title">{article.title}</h1>
          <p className="story__text">{article.longText}</p>
          <p className="story__author">By {article.author}</p>
        </div>
    </section>
  );
}

export default Post;