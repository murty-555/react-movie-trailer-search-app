import Dropdown from "./Dropdown";
import "../styles/Header.css";
import { genreList, languageList, sortBY } from "../Data/languages";

const Header = () => {
  return (
    <div className="header">
      <div className="header-item">
        <div className="header-title">Movie Trailers</div>
        <div className="display-flex">
          <button
            type="button"
            className="btn header-button"
          >
            coming soon
          </button>
          <button type="button" className="btn header-button active">
            now showing
          </button>
        </div>
      </div>
      <div className="dropdown-list">
        <Dropdown label={"Default"} list={sortBY} />
        <Dropdown label={"All Languages"} list={languageList} />
        <Dropdown label={"All Genres"} list={genreList} />
      </div>
    </div>
  );
};

export default Header;
