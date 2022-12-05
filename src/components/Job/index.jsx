import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCircleInfo, faChevronRight } from '@fortawesome/free-solid-svg-icons';


export default function Job({job, url}) {
  const anyLocation = "Any office or remote";
  const all = "SF, NY, Toront, Portland, or remote";
  const data = useContext(DataContext);
  const phoneSize = data.phoneSize;
  const [location, setLocation] = useState(phoneSize ? all : anyLocation );
  
  useEffect(()=>{  phoneSize ? setLocation(all) : setLocation(anyLocation) }, [phoneSize])

  return (
    <Link to={'/careers/' + url} className="job" state={job}>

      <div className="job__text-container">
        <p className="job__name">{job.jobname}</p>
        <span className="job__location__container">
          <FontAwesomeIcon icon={faLocationDot} className="job__icon" />
          { job.details.localisation === "all" ? 
              <p className="job__location">{location}</p>
            : <p className="job__location">{job.details.localisation}</p> }
          <FontAwesomeIcon icon={faCircleInfo} className="job__icon information" />
        </span>
      </div>
    
      <FontAwesomeIcon icon={faChevronRight} className="job__icon chevron" />

    </Link>
  );
}