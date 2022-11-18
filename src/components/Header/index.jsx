import RequestInviteBtn from '../RequestInviteBtn/index';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { useContext } from 'react';
import { DataContext } from '../DataProvider';
import Nav from '../Nav/index'

export default function Header() {
  const data = useContext(DataContext)

  return (
    <header className='header'>
      <Logo className="logo"/>
      <Nav />
      <div className={data.phoneSize ? "not-show" : "show"}>
        <RequestInviteBtn />
      </div>
      
    </header>
  );
}