import "./../css/Header.css";
import logo from "./../logo.svg";
import { Link } from "react-router-dom";
import { Dropdown } from "./DropdownButton/DropdownButton";
import Clock from "./content/Сlocks";

const CustomLink = ({ name, href, icon }) => {
  return (
    <span>
      {icon}
      <Link to={href}>{name}</Link>
    </span>
  );
};

const MAPS = [
  { name: "Эпицентр", href: "" },
  { name: "Завод" },
  { name: "Таможня" },
  { name: "Развязка" },
  { name: "Лес" },
  { name: "Берег" },
  { name: "Резерв" },
  { name: "Маяк" },
  { name: "Улицы Таркова" },
  { name: "Лаборатория" },
];

const PROGRESSION = [
  { name: "Предметы", href: "" },
  { name: "Убежище" },
  { name: "Карта квестов" },
];

const CALCULATORS = [
  { name: "Крафт", href: "" },
  { name: "Бартер" },
  { name: "BTC" },
];

const GUNSAMMO = [
  { name: "Готовые сборки", href: "" },
  { name: "Мои сборки" },
  { name: "Таблица патронов" },
];

function Header() {
  return (
    <header className="Header">
      <div className="Brand">
        <img src={logo} className="Brand__logo" alt="b__logo" />
        <b className="Brand__text">Tarkov Travel Guide</b>
      </div>

      {/* <div className="Clocks">
        <Clock />
        <b className="Clocks__Time">Time</b>
        <b className="Clocks__Icon">Icon</b>
      </div> */}

      <Dropdown name={"Карты"} items={MAPS} />

      <Dropdown name={"Прогресс"} items={PROGRESSION} />

      <Dropdown name={"Калькуляторы"} items={CALCULATORS} />

      <Dropdown name={"Оружие и патроны"} items={GUNSAMMO} />

      {/* <CustomLink name={"Maps"} href={"maps"} /> */}
      {/* <CustomLink name={"Progression"} href={"progression"} /> */}
      {/* <CustomLink name={"Calculators"} href={"calcs"} /> */}
      {/* <CustomLink name={"Guns-Ammo"} href={"guns-ammo"} /> */}
      {/* <CustomLink name={"More"} href={"moreinfo"} /> */}

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
