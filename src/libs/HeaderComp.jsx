import logo from './../logo.svg';

function Header() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <text><b>Tarkov Travel Guide</b></text>
    </div>
  );
}

export default Header;