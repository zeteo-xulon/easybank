import confetti from '../../assets/images/image-confetti.jpg';
import currency from '../../assets/images/image-currency.jpg';
import plane from '../../assets/images/image-plane.jpg';
import restaurant from '../../assets/images/image-restaurant.jpg'

const articles = [
  {
    id: 1,
    title: "Receive money in any currency with no fees",
    "text": "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
    picture: currency ,
    author: "Claire Robinson"
  },
  {
    id: 2,
    title: "Treat yourself without worrying about money",
    text: "Our simple bdgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
    picture: restaurant ,
    author: "Wilson Hutton"
  },
  {
    id: 3,
    title: "Take your Easybank car wherever you go",
    text: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...",
    picture: plane,
    author: "Wilson Hutton"
  },
  {
    id: 4,
    title: "our invite-only Beta accounts are now live!",
    text: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite though the site ...",
    picture: confetti,
    author: "Claire Robinson"
  }
]

export default function Articles() {
  return (
    <section className='articles'>
      <h1 className="articles__title">Latest Articles</h1>
      <div className="articles__post-container">
       {
        articles && articles.map((post) => {
          return(
            <article key={`${post.author + post.id}`} className='post'>
              <img className='post__img' src={post.picture} alt='visual of the post' />
              <div className="post__text-container">
                <p className="post__author">By {post.author}</p>
                <h3 className="post__title">{post.title}</h3>
                <p className="post__text">{post.text}</p>
              </div>
            </article>
            )
          })
        } 
      </div>
      
    </section>
  );
}