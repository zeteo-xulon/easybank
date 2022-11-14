import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Nav() {
  const [smartphoneSize, setSmartphoneSize] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [stockedWidth, setStockedWidth] = useState(0);
  useEffect(()=> {
    window.addEventListener('resize', () => { setStockedWidth(window.innerWidth) });
    return window.removeEventListener('resize', () => { setStockedWidth(0)})
  },[])

  useEffect(()=> {
    stockedWidth < 768 ? setSmartphoneSize(true) : setSmartphoneSize(false)
  },[stockedWidth])

  useEffect(()=> {
    if(smartphoneSize && !toggleMenu) { 
      let menuOn = document.getElementById('menuOn');
      menuOn.addEventListener('click', ()=> setToggleMenu(true));
    }
    if(smartphoneSize && toggleMenu) { 
      let menuOff = document.getElementById('menuOff');
      menuOff.addEventListener('click', ()=> setToggleMenu(false));
    }
    return (menuOn, menuOff)=>{
      if(menuOn){ menuOn.removeEventListener('click', ()=>{}) }
      if(menuOff){ menuOff.removeEventListener('click', ()=>{}) }
    }
  },[smartphoneSize, toggleMenu])
  

  return (
    <nav className='nav'>

      <div className="nav__container-menu">
        { smartphoneSize && !toggleMenu ? <div className="nav__menu-on" id="menuOn"></div> : "" }
        { smartphoneSize && toggleMenu ?  <div className="nav__menu-off" id="menuOff" ></div> : "" }
      </div>

     
        <div className="nav__link-container">
          <Link to={"/"} className="nav-link">Home</Link>
          <Link to={"/about"} className="nav-link">About</Link>
          <Link to={"/contact"} className="nav-link">Contact</Link>
          <Link to={"/blog"} className="nav-link">Blog</Link>
          <Link to={"/careers"} className="nav-link">Careers</Link>
        </div> 

    </nav>
  );
}