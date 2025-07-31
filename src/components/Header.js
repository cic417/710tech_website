import homeImg from "../img/home.jpg";
import '../css/header.css';

function Header() {
  return (
    <header className="header-section">
      <div className="header-img-wrapper">
        <img src={homeImg} alt="Home" className="header-img" />
        <div className="header-overlay"></div>
        <h1 className="header-title">
          WELCOME TO 710TECH LI
        </h1>
      </div>
      <div className="headerbg"></div>
    </header>
  );
}
export default Header;