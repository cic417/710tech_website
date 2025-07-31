import '../css/footer.css';

import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-6">
              <h1 className="logo">710TECH LI</h1>
                <p className="footer-text">
                  710TECH LI delivers innovative technology solutions, specializing in software development, automation, and cloud platforms to help businesses grow and succeed.
                </p>
            </div>
            <div className="col-md-4">
            </div>
            <div className="col-md-6">
              <p className="footer-title">Important Link</p>
              <ul>
                <li>
                <Link   
                        spy={true}
                        smooth={true}
                        duration={1000}
                        to="headerbg"
                > Home </Link>
                </li>
                <li>
                <Link to="services" spy={true} smooth={true} duration={1000} > Services </Link>
                </li>
                <li>
                <Link to="about-scroll" spy={true} smooth={true} duration={1000}>About Us  </Link>
                </li>
                <li>
                <Link to="ourteam" spy={true} smooth={true} duration={1000}>Our Team  </Link>
                </li>
                <li>
                <Link to="contact" spy={true} smooth={true} duration={1000}> Contact  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <p className="footer-title">Contact</p>
              <ul>
                <li>
                  <Link to="#" >info@710tech.com</Link>
                </li>
                <li>
                  <Link to="#" >7933 Preston Rd, Plano, TX 75024</Link>
                </li>
                <li>
                  <Link to="#" >+1 (361) 284-5505</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
