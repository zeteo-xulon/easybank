import { useLocation } from 'react-router-dom';

function Post() {
  const location = useLocation();
  const article = location.state.article;
  return (
    <section className='story'>
        <img className='story__img' src={article.picture} alt='visual of the post' />
        <div className="story__text-container">
          <h1 className="story__title">{article.title}</h1>
          {
            article?.longText?.map((text)=>{ 
              return <p className="story__text">{text}</p>}
              )
          }
          <h3 className="story__author">By {article.author}</h3>
        </div>
    </section>
  );
}

export default Post;