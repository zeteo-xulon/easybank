import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function JobDescription() {
  const location = useLocation();
  let job = location.state
  console.log(job);

  return (
    <div className="job-description">

      <section className="job-description__header">

        <h1 className="job-description__header__title">{ job.jobname }</h1>
        <p className="job-description__header__localisation">{ job.details.localisation }</p>
        <p className="job-description__header__worktime">{ job.details.worktime }</p>
        <p className="job-description__header__skills">{job.details.skills}</p>
        <p className="job-description__header__company">{job.details.company}</p>

      </section>

      <section className="job-description__paragraph">

        {job?.details.jobIntroText.map((text, i)=>{ return <p key={"intro-text" + i} className="job-description__paragraph__intro-text">{text}</p> })}

        <p className="job-description__todo-list__title">{job.details.todoListTitle}</p>
        <ul className="job-description__todo-list">
          {job?.details.todoList.map((todoText, i)=>{ return <li key={"todo-list-text" + i} className="job-description__paragraph__todo-list">{todoText}</li> })}
        </ul>
        

        <p className="job-description__prerequisite-list__title">{ job.details.prerequisiteListTitle }</p>
        <ul className="job-description__prerequisite-list-list">
          {job?.details.todoList.map((prerequisiteText, i)=>{ return <li key={"prerequisite-list-text" + i} className="job-description__paragraph__prerequisite-list-text">{prerequisiteText}</li> })}
        </ul>

        {job?.details.salaryTextList.map((text, i)=>{ return <p key={"salary-text" + i} className="job-description__paragraph__salary-text">{text}</p> })}

    
      </section>

      <aside className="job-description__button">
        <button className="apply-btn" onClick={()=>{}}>Apply Now</button>
        <Link to={"/careers"}>Why work at EasyBank</Link>
      </aside>
      
    </div>
  );
}