import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShowInstruction } from "../../../AppSlice";
import CloseIcon from "@mui/icons-material/Close";
import getInstruction from "../../../utils/GamesInstructions";

import "./InstructionWindow.css";
import { IconButton } from "@mui/material";

const InstructionWindow = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const currGame = useSelector((state) => state.app.currGame);
  const gameInstructions = getInstruction(currGame);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        dispatch(setShowInstruction(false));
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleOnCloseIconClicked = () => {
    dispatch(setShowInstruction(false));
  };

  const renderInstructions = (type) => {
    const instructionArr = gameInstructions[type];
    return instructionArr.map((item, index) => (
      <p key={`item${index}_${type}`} className="content">
        {item}
      </p>
    ));
  };

  return (
    <div className="instructionWrapper" ref={ref}>
      <div className="closeIcon">
        <CloseIcon onClick={handleOnCloseIconClicked} />
      </div>
      <h1 className="title">{currGame}</h1>
      <p className="subTitle">How to play</p>
      {renderInstructions("how to play")}
      <p className="subTitle">How you win</p>
      {renderInstructions("how to win")}
    </div>
  );
};

export default InstructionWindow;
