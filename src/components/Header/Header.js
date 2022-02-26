import { useSelector } from "react-redux";

import "./Header.css";
import AppNavigation from "../AppNavigation/AppNavigation";

const Header = () => {
  const currGame = useSelector((state) => state.app.currGame);

  return (
    <div className="HeaderWrapper">
      <div className="SecondaryWrapper"></div>
      <div className="CenteredWrapper">Take A Break</div>
      <div className="SecondaryWrapper">{currGame && <AppNavigation />}</div>
    </div>
  );
};

export default Header;
