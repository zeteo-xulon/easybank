import RequestInviteBtn from '../RequestInviteBtn/index';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import Nav from '../Nav/index'
export default function Header() {
  return (
    <header className='header'>
      <Logo className="logo" />
      <Nav />
      <RequestInviteBtn />
    </header>
  );
}