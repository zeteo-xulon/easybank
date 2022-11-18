import { Link } from "react-router-dom";
import RequestInviteBtn from "../RequestInviteBtn";
import { ReactComponent as LogoWhite } from '../../assets/images/logo_white.svg';
import { ReactComponent as FBIcon } from '../../assets/images/icon-facebook.svg';
import { ReactComponent as YTIcon } from '../../assets/images/icon-youtube.svg';
import { ReactComponent as TwitIcon } from '../../assets/images/icon-twitter.svg';
import { ReactComponent as PinIcon } from '../../assets/images/icon-pinterest.svg';
import { ReactComponent as InstaIcon } from '../../assets/images/icon-instagram.svg';

export default function Footer() {
  return (
    <footer className="footer">

      <aside className="footer__logo-link-container">

        <div className="footer__link-container">
          <LogoWhite className="logo" />
          <div className="social-media__link-container">
            <a href="www.facebook.com" className="social-media__link"><FBIcon className="social-media-logo" /></a>
            <a href="www.youtube.com" className="social-media__link"><YTIcon className="social-media-logo" /></a>
            <a href="www.twitter.com" className="social-media__link"><TwitIcon className="social-media-logo" /></a>
            <a href="www.pinterest.com" className="social-media__link"><PinIcon className="social-media-logo" /></a>
            <a href="www.instagram.com" className="social-media__link"><InstaIcon className="social-media-logo" /></a>
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