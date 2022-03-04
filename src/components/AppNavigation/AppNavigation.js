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
          fontSize="large"
          onClick={HandleOnClickedInfo}
          style={{ margin: "auto 0.5rem", cursor: "pointer" }}
        />
      )}

      <RotateLeftIcon
        fontSize="large"
        onClick={HandleOnClickedReset}
        style={{ margin: "auto 0.5rem", cursor: "pointer" }}
      />
      <HomeIcon
        fontSize="large"
        onClick={HandleOnClickedHome}
        style={{ margin: "auto 0.5rem", cursor: "pointer" }}
      />
    </>
  );
};

export default AppNavigation;
