import "./../css/Header.css";
import logo from "./../logo.svg";

function Header() {
  return (
    <div className="Header">
      <div className="Brand">
        <img src={logo} className="Brand__logo" alt="b__logo" />
        <b className="Brand__text">Tarkov Travel Guide</b>
      </div>
      <div className="Clocks">
        <b className="Clocks__Time">Time</b>
        <b className="Clocks__Icon">Icon</b>
      </div>
      <div className="dropdown_Maps">
        <b>Maps</b>
      </div>
      <div className="dropdown_Progression">
        <b>Progression</b>
      </div>
      <div className="dropdown_Calculators">
        <b>Calculators</b>
      </div>
      <div className="dropdown_Guns_Ammo">
        <b>Guns/Ammo</b>
      </div>
      <div className="dropdown_More">
        <b>More</b>
      </div>
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
    </div>
  );
}

export default Header;
