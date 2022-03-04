import { useSelector } from "react-redux";

import "./Header.css";
import AppNavigation from "../AppNavigation/AppNavigation";

const Header = () => {
  const currGame = useSelector((state) => state.app.currGame);

  return (
    <div className="HeaderWrapper">
      <div className="SecondaryWrapper"></div>
      <div className="CenteredWrapper">
        <h1>Take A Break</h1>
      </div>
      <div className="SecondaryWrapper">{currGame && <AppNavigation />}</div>
    </div>
  );
};

export default Header;
