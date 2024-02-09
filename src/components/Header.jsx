import "./../css/Header.css";
import logo from "./../logo.svg";
import { Link } from "react-router-dom";
import { Dropdown } from "./DropdownButton/DropdownButton";

const CustomLink = ({ name, href, icon }) => {
  return (
    <span>
      {icon}
      <Link to={href}>{name}</Link>
    </span>
  );
};

const MAPS = [
  { name: "Завод", href: "" },
  { name: "Лес" },
  { name: "Лес" },
  { name: "Лес" },
  { name: "Лес" },
  { name: "Лес" },
];

function Header() {
  return (
    <header className="Header">
      <div className="Brand">
        <img src={logo} className="Brand__logo" alt="b__logo" />
        <b className="Brand__text">Tarkov Travel Guide</b>
      </div>
      <div className="Clocks">
        <b className="Clocks__Time">Time</b>
        <b className="Clocks__Icon">Icon</b>
      </div>
      <Dropdown name={"Карты"} items={MAPS} />
      <CustomLink name={"Maps"} href={"maps"} />
      <CustomLink name={"Progression"} href={"progression"} />
      <CustomLink name={"Calculators"} href={"calcs"} />
      <CustomLink name={"Guns-Ammo"} href={"guns-ammo"} />
      <CustomLink name={"More"} href={"moreinfo"} />

      <div className="Login">
        <div className="Login__Language">
          <b>EN/RU </b>
        </div>
        <div className="Login__Button">
          <b> Login</b>
        </div>
        <div className="Login__Profile">
          <b> Profile</b>
        </div>
      </div>
    </header>
  );
}

export default Header;
