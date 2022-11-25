export default function About() {
  return (
    <section className="about">
      <article className="about__article--first">
        <div className="img--bg"></div>
        <h1 className="about__article__title">What we’re doing</h1>
        <p className="about__article__text">EasyBank is building banking for startups. We’re empowering the next generation of startups.</p>
      </article>

      <article className="about__article special--bg">

        <h1 className="about__article__title">Our team</h1>
        <aside className="about__aside">
          <p className="about__article__text">We like tea, reading, basketball, drawing pictures, climbing rocks, Monopoly Deal, Haskell, walking on the beach, parakeets, cats, dogs, USC, checking restaurant health scores, and much more.</p>
          <p className="about__article__text">We value active thinking, quality, humility, product, efficiency, and being super helpful.</p>
          <p className="about__article__text">We’re located in San Francisco, California.</p>
        </aside>
        
      </article>

      <article className="about__article">
        <h1 className="about__article__title">Founders</h1>
        <aside className="about__aside">
          <p className="about__article__text">Mark Zuck</p>
          <p className="about__article__text">Steven Willsberg</p>
          <p className="about__article__text">Evan Me</p>
        </aside>
        
      </article>
    </section>
  );
}