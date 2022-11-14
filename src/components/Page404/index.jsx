import { Link } from "react-router-dom";
export default function Page404() {
  return (
    <div className='page-404'>
      <div className="page-404__img"></div>
      <p className="page-404__title">404 There is nothing here.</p>
      <Link to={"/"} className="btn page-404__btn">Return Home</Link>
    </div>
  );
}