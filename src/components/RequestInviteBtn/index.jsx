import { Link } from "react-router-dom";
export default function RequestInviteBtn() {
  return (
    <> 
      <Link to={"/invite"} className="request-invite header-request">Request Invite</Link> 
    </> 
  );
}