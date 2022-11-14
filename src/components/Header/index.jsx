import RequestInviteBtn from '../RequestInviteBtn/index';
import Nav from '../Nav/index'
export default function Header() {
  return (
    <header className='header'>
      <div className="logo"></div>
      <Nav />
      <RequestInviteBtn />
    </header>
  );
}