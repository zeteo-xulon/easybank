import { Link } from "react-router-dom";
import RequestInviteBtn from "../RequestInviteBtn";
import { ReactComponent as LogoWhite } from '../../assets/images/logo_white.svg';
import fbicon from '../../assets/images/icon-facebook.svg';
import yticon from '../../assets/images/icon-youtube.svg';
import twiticon from '../../assets/images/icon-twitter.svg';
import pinicon from '../../assets/images/icon-pinterest.svg';
import instaicon from '../../assets/images/icon-instagram.svg';

export default function Footer() {
  return (
    <footer className="footer">

      <aside className="footer__logo-link-container">

        <div className="footer__link-container">
          <LogoWhite className="logo" />
          <div className="social-media__link-container">
            <img src={fbicon} className="social-media__logo" alt="facebook icon" onClick={()=>{ window.location.href = "https://www.facebook.com/" }} />
            <img src={yticon} className="social-media__logo" alt="youtube icon" onClick={()=>{ window.location.href = "https://www.youtube.com/" }} />
            <img src={twiticon} className="social-media__logo" alt="twitter icon" onClick={()=>{ window.location.href = "https://twitter.com/" }} />
            <img src={pinicon} className="social-media__logo" alt="pinterest icon" onClick={()=>{ window.location.href = "https://www.pinterest.com/" }} />
            <img src={instaicon} className="social-media__logo" alt="instagram icon" onClick={()=>{ window.location.href = "https://www.instagram.com/" }} />
          </div>
        </div>

        <div className="footer__link-container">
          <Link to={"/about"} className="footer__link">About Us</Link>
          <Link to={"/contact"} className="footer__link">Contact</Link>
          <Link to={"/blog"} className="footer__link">Blog</Link>
        </div>
        <div className="footer__link-container">
          <Link to={"/career"} className="footer__link">Career</Link>
          <Link to={"/support"} className="footer__link">Support</Link>
          <Link to={"/privacy-policy"} className="footer__link">Privacy Policy</Link>
        </div>
      </aside>

      <div className="footer__btn-copyright__container">
        <RequestInviteBtn />
        <p className="footer__btn-copyright__container__copyright">©EasyBank. All Rights Reserved</p>
      </div>

    </footer>
  );
}