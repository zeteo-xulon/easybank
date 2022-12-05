import Roles from "../Roles";
import CareersInfo from "../CareersIntro";
import CareersValues from "../CareersValues";

export default function Careers() {
  return (
    <div className="careers">
      <div className="careers__container">
        <CareersInfo />
        <CareersValues />
        <Roles />
      </div>
    </div>
  );
}