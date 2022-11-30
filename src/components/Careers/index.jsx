import Roles from "../Roles";

const textList = [
  {
    id: 0,
    title:"Think actively",
    text:"Question processes. Give thoughtful responses. Find the best way instead of going by how it’s always been done."
  },
  {
    id: 1,
    title:"Appreciate quality",
    text:"Take pride in crafting a lasting product. Work with the best equipment. Invest in great things that improve your life."
  },
  {
    id: 2,
    title:"Be super helpful",
    text:"Go above and beyond to solve problems. Exercise empathy. Deliver magic to customers and coworkers."
  },
  {
    id: 3,
    title:"Maximize efficiency",
    text:"Minimize unnecessary meetings and management. Work together with others to get the job finished."
  },
  {
    id: 4,
    title:"Act with humility",
    text:"Treat everyone with respect. Leave egos at the door."
  },
  {
    id: 5,
    title:"Focus on product",
    text:"Ask yourself how the product can be better today than it was yesterday."
  },
]

export default function Careers() {
  return (
    <div className="careers">

      <div className="careers__container">

        <section className="careers__intro">
          <h1 className="careers__intro__title">Work at EasyBank</h1>
          <p className="careers__intro__sub">We’re building banking for startups. We prioritize beauty, usability, and simplicity.</p>
          <a href="#openroles" className="careers__intro__link">see our open roles</a>
          <p className="careers__intro__text">EasyBank is a financial technology company, and a bank. Banking services provided by Choice Financial Group and Evolve Bank & Trust®; Members GMAA.</p>
        </section>

        <section className="careers__values">
          <h2 className="careers__values__title">Our values</h2>
          <p className="careers__values__sub">We care about what we’re building and how we build it.</p>

          <aside className="careers__values__container">
            {
              textList.map((item)=>{
                return(
                  <div key={"careers__text-box-" + item.id} className="careers__values__text-box">
                    <h3 className="careers__values__text-box__title">{item.title}</h3>
                    <p className="careers__values__text-box__text">{item.text}</p>
                  </div>
                )
              })
            }
          </aside>

        </section>

        <Roles />
        
      </div>

    </div>
  );
}