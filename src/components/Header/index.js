import "./index.css";
import burguer from "../../assets/Hamburger.svg";

export function Header(props) {
  return (
    <div className="head">
      <header
        style={{
          backgroundColor: props?.settings?.navBackgroundColour
            ? props.settings.navBackgroundColour
            : "#f00",
        }}>
        <div></div>
        <h1>Menu</h1>
        <div className="wrap-menu">
          <label htmlFor="menu">
            <img src={burguer}></img>
          </label>
        </div>
      </header>
      <input type="checkbox" name="menu" id="menu" />
      <nav
        className="menu"
        style={{
          backgroundColor: props?.settings?.navBackgroundColour
            ? props.settings.navBackgroundColour
            : "#f00",
        }}>
        <ul>
          <li className="selected">MENU</li>
          <li>ENTRAR</li>
          <li>CONTATO</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
