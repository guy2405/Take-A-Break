import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShowInstruction } from "../../../AppSlice";
import CloseIcon from "@mui/icons-material/Close";
import getInstruction from "../../../utils/GamesInstructions";

import "./InstructionWindow.css";

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
  }, [dispatch]);

  const handleOnCloseIconClicked = () => {
    dispatch(setShowInstruction(false));
  };

  const renderInstructions = (type) => {
    const instructionArr = gameInstructions[type];
    return instructionArr.map((item, index) => (
      <p key={`item${index}_${type}`}>{item}</p>
    ));
  };

  return (
    <div className="instructionWrapper" ref={ref}>
      <div className="closeIcon">
        <CloseIcon onClick={handleOnCloseIconClicked} />
      </div>
      <h2>{currGame}</h2>
      <h3>How to play</h3>
      {renderInstructions("how to play")}
      <h3>How you win</h3>
      {renderInstructions("how to win")}
    </div>
  );
};

export default InstructionWindow;
