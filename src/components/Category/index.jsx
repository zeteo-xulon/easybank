import Job from "../Job/index.jsx";

export default function Category({ category }) {
  return (
    <ul className="category">
      <h5 className="category__title">{category.categoryName}</h5>
      {
        category?.jobs.map((job) =>{
          return( <Job key={ job.jobname + job.id } job={job} url={job.jobname.replaceAll(' ', '')} /> )
        })
      }
    </ul>
  );
}