import "./styles/Header.css";
import Logo from "./../images/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="header-text">
        <p className="balance-text">My balance</p>
        <p className="balance-qty">$921.48</p>
      </div>
      <div className="header-logo">
        <img src={Logo} alt="logo"></img>
      </div>
    </header>
  );
};

export default Header;
