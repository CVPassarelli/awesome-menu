import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleSearchTerm } from "../../store/reducers/search";
import "./index.css";

export function Search(props) {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(null);

  function onTypeSearch(change) {
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }
    setTimer(
      setTimeout(() => {
        dispatch(handleSearchTerm(change));
      }, 500)
    );
  }
  return (
    <div className="wrap-search">
      <input
        type="text"
        placeholder="Search menu items"
        className="search"
        onInput={(e) => onTypeSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
