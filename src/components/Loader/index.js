import burger from "../../assets/burguer-load.gif";
import "./index.css";

export function Loader() {
  return (
    <>
      <div className="load-wrapper">
        <div className="loader">
          <img src={burger} />
        </div>
        <p>Loading</p>
      </div>
    </>
  );
}

export default Loader;
