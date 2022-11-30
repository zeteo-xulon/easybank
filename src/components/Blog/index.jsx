import confetti from '../../assets/images/image-confetti.jpg';
import currency from '../../assets/images/image-currency.jpg';
import plane from '../../assets/images/image-plane.jpg';
import restaurant from '../../assets/images/image-restaurant.jpg'

import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    url:"currency",
    title: "Receive money in any currency with no fees",
    text: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
    longText: [
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single app with a powerfull multi bank system.",
      "Once you’ve opened an investment account and you begin to build your portfolio, asset allocation is one of the most important strategies to consider to help you balance risk and return. A typical portfolio might divide its assets among three main asset classes: stocks, bonds and cash. Each asset class has its own risk and return profile, behaving a little bit differently under different market circumstances.",
      "For example, stocks tend to offer the highest gains, but they are also the most volatile, presenting the most potential for losses. Bonds are generally considered to be less risky than stocks, while cash is the most stable. Cash investments in your savings account are insured by the federal government.",
      "The proportion of each asset class you hold will depend on your goals, time horizon and risk tolerance. Your goal tells you how much you need to save. Your time horizon is the length of time you have before reaching your goals. And your risk tolerance is how willing you are to accept losses in the short-term in exchange for potentially greater long-term gains.",
      "Your asset allocation can shift over time. For example, someone in their 30s saving for retirement has a long time horizon and may have a higher risk tolerance. As a result their portfolio may contain mostly stocks. As that person ages and nears retirement, their portfolio may shift to contain more bonds and cash, which are less risk and less likely to lose value in the short-term."
  ],
    picture: currency ,
    author: "Claire Robinson"
  },
  {
    id: 2,
    url:"budgeting",
    title: "Treat yourself without worrying about money",
    text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
    longText: [
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you can stop whenever you want, with the maximum you have fixed, using your EasyBank app.",
      "Another way to manage risk in your portfolio is through diversification, building a portfolio with a broad mix of investments across assets, helping you avoid putting all your eggs in one basket.",
      "Here’s how it works: Imagine you had a portfolio consisting of stock from one company. If that stock does poorly your entire portfolio suffers.",
      "Now imagine a portfolio consisting of many stocks, from companies of all sizes, sectors and parts of the globe. Not only that, it also holds other investments, including bonds. Now, if one stock suffers, it will have a much smaller effect on your overall portfolio, spreading out the risk of holding any one investment."
  ],
    picture: restaurant ,
    author: "Wilson Hutton"
  },
  {
    id: 3,
    url:"easybank_where_you_want",
    title: "Take your Easybank car wherever you go",
    text: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...",
    longText: [
      "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you how much you are gonna save when you go to your journey trip.", 
      "You may have also heard of a Health Savings Account (HSA)  , and it’s easy to confuse the two. These two accounts are rather similar, except that a Health Savings Account (HSA) allows your savings funds to roll over from year to year—unlike an FSA, there is no deadline to spend your money.", 
      "Both types of accounts have tax advantages  , and both are meant only for health-related expenses. Both are able to be funded by employee-payroll deductions, employer contributions, or individual deductions. Both plans require a doctor’s prescription to use the account for over-the-counter (OTC) medications.", 
      "Here are some other specifics  that distinguish HSAs: An HSA can only be established in conjunction with an HSA-qualified high deductible health plan (HDHP). Whatever money is placed into an HSA can be used in the future for qualified medical expenses, even after you are no longer covered by that HDHP  . And that money is still tax-free.", 
      "The maximum amount of money you can contribute to your HSA per year is $3,450 if you have individual HDHP coverage. If you have a family plan, the total contribution allowed is $6,900.",
      "If you quit or are fired from your job, your HSA can go with you. This happens even if your employer contributed money to the account.", 
      "If you need to take money out of your HSA for reasons other than those that are health-related, you will be taxed on that withdrawal  , and there is an additional 20% penalty applied to the withdrawal.", 
      "If you withdraw money from your HSA after age 65  , the transaction will be penalty-free, but you will still be taxed on the withdrawal."
    ],
    picture: plane,
    author: "Wilson Hutton"
  },
  {
    id: 4,
    url:"beta-invite",
    title: "our invite-only Beta accounts are now live!",
    text: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite though the site ...",
    longText: [
      "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite though the site, you just have to click on the request invite button showing up in different place on our website.",
      "EasyBank is a financial technology company on a mission to re-architect banking around the customer. Our whitelabel Engagement Banking platform empowers banks and credit unions to rapidly digitize their customer-facing operations and create seamless journeys that meet and exceed the expectations of today’s digital-savvy customers. With EasyBank, banks and credit unions can put their customers back in the heart of their business.",
      "Industry analysts Forrester, Gartner, Celent, Omdia and IDC continuously recognize EasyBank’s category leadership position. Over 150 financials around the world have embraced the EasyBank Engagement Banking Platform – including Advanzia, Banco Caja Social, Banco de la Nacion Peru, Bank of the Philippine Islands, Berenberg, BNP Paribas, Citizens Bank, ENT, Greater Bank, HDFC, Judo Bank, KeyBank, National Bank of Bahrain, Navy Federal Credit Union, Natwest, Pictet & Cie, Raiffeisen, SchoolFirst Federal Credit Union, Standard Bank, Société Générale, TPBank, Washington State Employee Credit Union and Wildfire Credit Union.",
      "EasyBank was founded in 2003 in Amsterdam (global HQ), with regional offices in Atlanta (Americas HQ), Boise, Mexico City, Toronto, London, Cardiff, Dubai, Kraków, Singapore, Sydney and Tokyo."
    ],
    picture: confetti,
    author: "Claire Robinson"
  }
]

export default function Blog() {
  return (
    <section className="blog">
      <h1 className="blog__title">Blog</h1>
      <p className="blog__sub-text">You can follow our legacy to achieve the best of banking and finance in our latest article.</p>
      <div className="blog__article-container">
        <h2 className="articles__title">Latest Articles</h2>
        <div className="articles__post-container">
        {
          articles && articles.map((post) => {
            return(
              <Link 
              to={"/blog/" + post.url} 
              key={`${post.author + post.id}`} 
              className='post'
              state={{ article: post }}
              >
                <img className='post__img' src={post.picture} alt='visual of the post' />
                <div className="post__text-container">
                  <p className="post__author">By {post.author}</p>
                  <h3 className="post__title">{post.title}</h3>
                  <p className="post__text">{post.text}</p>
                </div>
              </Link>
              )
            })
          } 
        </div>
      </div>
      
    </section>
  );
}