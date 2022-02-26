import BullsAndCows from "./BullsAndCows";

import { useSelector } from "react-redux";

import "./Games.css";

const Games = () => {
  const currGame = useSelector((state) => state.app.currGame);

  const renderGame = {
    "Bulls and Cows": <BullsAndCows />,
  };

  return <div className="GamesWrapper">{renderGame[currGame]}</div>;
};

export default Games;
