import React from 'react';
import '../../styles/footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';

const Footer = () => {

  return (
    <div className={'footer-container'}>
      <div className="footer-links">
        <div className="footer-item">

          <Link to='/contact' className='links'>
            <i
              className='fa-brands fa-instagram'
              ></i>
          </Link>

        </div>
        <div className="footer-item">

          <Link to='/contact' className='links'>
            <i
              className='fa-brands fa-youtube'
              ></i>
          </Link>

        </div>
        <div className="footer-item">
          <Link to='/contact' className='links'>
            <i
              className='fa-brands fa-tiktok'
              ></i>
          </Link>
        </div>
        <div className="footer-item">

            <Link to='/contact' className='links'>
              <i className='fa-solid fa-phone'></i>
            </Link>
        </div>
      </div>
      <div className='footerLogoSection'>
        <Link to="/">
          <img src={logo} className="footerLogo" alt="Logo" />
        </Link>
        <p className='copyright'>&copy;2024 Telugu Medium | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
