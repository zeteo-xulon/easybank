import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faLaptop, faCode } from '@fortawesome/free-solid-svg-icons';
import easyBankIcon from '../../assets/images/favicon_easybank.png';

export default function JobDescription() {
  const location = useLocation();
  let job = location.state

  return (
    <div className="job-description">

      <section className="job-description__header">

        <h1 className="job-description__header__title">{ job.jobname }</h1>

        <span className="job-description__header__container">
          <FontAwesomeIcon icon={faLocationDot} className="job-description__icon" />
          <p className="job-description__header__localisation">{ job.details.localisation }</p>
        </span>

        <span className="job-description__header__container">
          <FontAwesomeIcon icon={faLaptop} className="job-description__icon" />
          <p className="job-description__header__worktime">{ job.details.worktime }</p>
        </span>

        <span className="job-description__header__container">
        {  job.details.skills !== "" ?
          <FontAwesomeIcon icon={faCode} className="job-description__icon" /> : ""}
          <p className="job-description__header__skills">{ job.details.skills?.map((skill, i)=> { 
            return (i === 0 ? "" : " ") + skill + (job.details.skills.length -1 === i ? "" : ",")
            }) }</p>
        </span>

        <span className="job-description__header__container">
          <img src={easyBankIcon} alt='easyBank icon' />
          <p className="job-description__header__company">{job.details.company}</p>
        </span>

      </section>


      <section className="job-description__paragraph">

        <span className="job-description__paragraph__intro-text__container">
          { job?.details.jobIntroText.map((text, i)=>{ return <p key={"intro-text" + i} className="job-description__paragraph__intro-text">{text}</p> })  }
        </span>       
        
        <ul className="job-description__todo-list">
          <p className="job-description__todo-list__title">{job.details.todoListTitle}</p>
          { job?.details.todoList.map((todoText, i)=>{ return <li key={"todo-list-text" + i} className="job-description__paragraph__todo-list">{todoText}</li> }) }
        </ul>
  
        <ul className="job-description__prerequisite-list-list">
          <p className="job-description__prerequisite-list__title">{ job.details.prerequisiteListTitle }</p>
          {job?.details.todoList.map((prerequisiteText, i)=>{ return <li key={"prerequisite-list-text" + i} className="job-description__paragraph__prerequisite-list-text">{prerequisiteText}</li> })}
        </ul>

        <span className="job-description__paragraph__salary-text__container">
          { job?.details.salaryTextList.map((text, i)=>{ return <p key={"salary-text" + i} className="job-description__paragraph__salary-text">{text}</p> })  }
        </span>

      </section>


      <aside className="job-description__button">
        <button className="apply-btn" onClick={()=>{}}>Apply Now</button>
        <Link to={"/careers"} className="why-btn">Why work at EasyBank</Link>
      </aside>
      
    </div>
  );
}