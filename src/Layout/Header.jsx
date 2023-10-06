import { Search, Details } from "../Components";
import Styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={Styles.Header}>
      <h1 className={Styles.title}>Coordinate Finder</h1>
      <Search />
      <Details />
    </header>
  );
};

export default Header;
