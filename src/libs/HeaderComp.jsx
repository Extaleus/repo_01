import './../css/HeaderComp.css'
import logo from './../logo.svg';

function Header() {
  return (
    <div className='Header'>
      <img src={logo} className="Header__logo" alt="logo" />
      <text><b>Tarkov Travel Guide</b></text>
    </div>
  );
}

export default Header;