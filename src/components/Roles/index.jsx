import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import server from '../../server/jobs.json';

export default function Roles() {
  const [jobs, setJobs] = useState();
  // const [localisation, setLocalisation] = useState("SF, NY, Toronto, Portland, or Remote");
  // const [windowSize, setWindowSize] = useState(window.innerWidth)
  // const [smSize, setSmSize] = useState(false);
  
  useEffect(()=>{
    const fetchJobs = server;
    console.log({...fetchJobs.jobs})
    setJobs({...fetchJobs.jobs});
  },[])
  
  // useEffect(()=>{
  //   let wSize = window.innerWidth;
  //    setWindowSize(wSize)
  // },[])


  return (
    <section className="roles" id='openroles'>
          <div className="roles__header">
            <h4 className="roles__header__title">Open Roles</h4>
            <p className="roles__header__sub">Interested in doing something not listed here? Contact us on our contact page.</p>
          </div>

          <div className="roles__job">
           {
            jobs ? Object.keys(jobs).map((category)=>{
              return(
                <ul>
                  <h5 className="category__title">{category}</h5>
                  
                </ul>
              )
            }) :""
           }
          </div>
        </section>
  );
}

// {
//   category.map((job)=>{
//     return(
//       <li className="job">
//         <Link to={ "/career/" + job.id }>
//           <h6 className="job__title">{job.title}</h6>
//           { job.localisation === "all" ? "" : ""}
//         </Link>
//       </li>
//     )
//   })
// }