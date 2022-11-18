import budget from '../../assets/images/icon-budgeting.svg';
import online from '../../assets/images/icon-online.svg';
import onboard from '../../assets/images/icon-onboarding.svg';
import openapi from '../../assets/images/icon-api.svg';

const list = [
  {
    id: 1,
    title: "Online Banking",
    text: "Our modern web mobile applications allow you to keep track of your finances wherever you are in the world.",
    picture: online
  },
  {
    id: 2,
    title: "Simple Budgeting",
    text: "See exactly where your money goes each month. Receive notifications when you're clote to hitting your limits.",
    picture: budget
  },
  {
    id: 3,
    title: "Fast Onboarding",
    text: "We don't branches. Open your account in minutes online and start taking control of your finances right away.",
    picture: onboard
  },
  {
    id: 4,
    title: "Open API",
    text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    picture: openapi
  },
]


export default function Reason() {

  return (
    <section className="reason">
      <article className="reason__text-container">
        <h1 className="reason__title">Why choose Easybank</h1>
        <p className="reason__text">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
      </article>

      <ul className="reason__list">
        {
          list.map((article)=> { 
            return (
              <li key={ article.title + article.id} className='article'>
                <img className='article__img' src={article.picture} alt="article icon" />
                <h2 className="article__title">{article.title}</h2>
                <p className="article__text">{article.text}</p>
              </li>
            )
          })
        }
      </ul>
    </section>
  );
}