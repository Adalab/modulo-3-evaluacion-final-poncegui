import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img
        className="logo"
        src={logo}
        alt="Harry Potter"
        title="Harry Potter"
      />
    </header>
  );
};
export default Header;
