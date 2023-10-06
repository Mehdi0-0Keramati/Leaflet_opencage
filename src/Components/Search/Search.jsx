import Styles from "./Search.module.css";
import SearchBtn from "../../assets/icon-arrow.svg";

const Search = () => {
  return (
    <form>
      <input
        type="text"
        className={Styles["search-input"]}
        placeholder="Search Location..."
      />
      <button className={Styles["search-button"]} type="button">
        {/* <SearchBtn /> */}
        <img src={SearchBtn} alt="" />
      </button>
    </form>
  );
};

export default Search;
