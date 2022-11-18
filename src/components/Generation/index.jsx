import RequestInviteBtn from "../RequestInviteBtn";
import { ReactComponent as DesktopBG } from '../../assets/images/bg-intro-desktop.svg';
import { ReactComponent as SmartphoneBG } from '../../assets/images/bg-intro-mobile.svg';
import Mockup from "../../assets/images/image-mockups.png"
import { useContext, useEffect, useState } from "react";
import { DataContext } from '../DataProvider';

export default function Generation() {
  // eslint-disable-next-line
  const [smSize, setSmSize] = useState(false)
  const data = useContext(DataContext);

  useEffect(()=> {
    setSmSize(data.PhoneSize);
  },[data.PhoneSize])

  return (
    <section className='generation'>
      <aside className="generation__text-container">
        <h1 className="generation__title">Next generation digital banking</h1>
        <p className="generation__text">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
        <RequestInviteBtn />
      </aside>
      <div className="generation__img-container">
        <div className="generation__hidden">
          { 
            data.phoneSize ? <SmartphoneBG className="generation__img-bg" /> : <DesktopBG className="generation__img-bg" />
          }
        </div>
        <div className="generation__hidden2">
          <img src={Mockup} className="generation__img-mockup" alt="many smartphone with the bank's different interfaces"></img>
        </div>
        
      </div>
    </section>
  );
}