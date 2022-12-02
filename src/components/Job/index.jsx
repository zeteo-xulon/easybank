import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider";


export default function Job({job, url}) {
  const anyLocation = "Any office or remote";
  const specific = "SF, NY, Portland, or remote";
  const all = "SF, NY, Toront, Portland, or remote";
  const data = useContext(DataContext);
  let phoneSize = data.phoneSize;
  const [location, setLocation] = useState(phoneSize ? all : anyLocation );
  
  useEffect(()=>{
    phoneSize ? setLocation(all) : setLocation(anyLocation);
  },[phoneSize])

  return (
    <Link to={'/careers/' + url} className="job" state={job}>
      <p className="job__name">{job.jobname}</p>
      {
        job.details.localisation === "all" ? 
        <p className="job__location">{location}</p>
        : <p className="job__location">{job.details.localisation}</p>
      }
    </Link>
  );
}