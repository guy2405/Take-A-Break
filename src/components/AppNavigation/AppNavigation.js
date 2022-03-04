import HomeIcon from "@mui/icons-material/Home";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import InfoIcon from "@mui/icons-material/Info";

import {
  resetCurrGame,
  resetCurrGameData,
  setShowInstruction,
} from "../../AppSlice";
import { useDispatch } from "react-redux";

import "./AppNavigation.css";

const AppNavigation = ({ excludeInfo }) => {
  const dispatch = useDispatch();

  const HandleOnClickedHome = () => {
    dispatch(resetCurrGame());
  };

  const HandleOnClickedReset = () => {
    dispatch(resetCurrGameData());
  };

  const HandleOnClickedInfo = () => {
    dispatch(setShowInstruction(true));
  };
  return (
    <>
      {!excludeInfo && (
        <InfoIcon
          fontSize="medium"
          onClick={HandleOnClickedInfo}
          className="navigationIcons"
        />
      )}

      <RotateLeftIcon
        fontSize="medium"
        onClick={HandleOnClickedReset}
        className="navigationIcons"
      />
      <HomeIcon
        fontSize="medium"
        onClick={HandleOnClickedHome}
        className="navigationIcons"
      />
      <div className="test"></div>
    </>
  );
};

export default AppNavigation;
