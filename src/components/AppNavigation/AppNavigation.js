import HomeIcon from "@mui/icons-material/Home";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";

import { resetCurrGame } from "../../AppSlice";
import { useDispatch } from "react-redux";

import "./AppNavigation.css";

const AppNavigation = () => {
  const dispatch = useDispatch();

  const HandleOnClickedHome = () => {
    dispatch(resetCurrGame());
  };

  const HandleOnClickedReset = () => {};

  return (
    <>
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
