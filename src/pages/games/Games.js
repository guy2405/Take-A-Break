import BullsAndCows from "./BullsAndCows";
import InstructionWindow from "./InstructionWindow/InstructionWindow";

import { useSelector } from "react-redux";

import "./Games.css";

const Games = () => {
  const currGame = useSelector((state) => state.app.currGame);
  const showInstruction = useSelector((state) => state.app.showInstruction);

  const renderGame = {
    "Bulls and Cows": <BullsAndCows />,
  };

  return (
    <div className="GamesWrapper">
      {showInstruction && <InstructionWindow />}
      {renderGame[currGame]}
    </div>
  );
};

export default Games;
