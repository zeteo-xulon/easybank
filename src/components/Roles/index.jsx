import { useEffect, useState } from "react";
import server from '../../server/careers.json';
import Category from "../Category";

export default function Roles() {
  const [careers, setCareers] = useState();
  
  useEffect(()=>{
    const fetchCareers = server;
    setCareers(fetchCareers);
    // eslint-disable-next-line
  },[])
  
  return (
    <section className="roles" id='openroles'>
      <div className="roles__header">
        <h4 className="roles__header__title">Open Roles</h4>
        <p className="roles__header__sub">Interested in doing something not listed here? Contact us on our contact page.</p>
      </div>

      <div className="roles__job">
      {
        careers?.map((cat, i)=>{
          return( <Category key={cat.categoryName + i} category={cat} index={i} /> )
        })
      }
      </div>
    </section>
  );
}