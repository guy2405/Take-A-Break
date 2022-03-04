import MenuButton from "../../components/MenuButton";
import Games from "../games/Games";
import { useSelector, useDispatch } from "react-redux";
import { setCurrGame, setShowInstruction } from "../../AppSlice";

import "./MainPage.css";

const MainPage = () => {
  const currGame = useSelector((state) => state.app.currGame);
  const dispatch = useDispatch();
  const handleGameChanged = (gameName) => {
    dispatch(setCurrGame(gameName));
    dispatch(setShowInstruction(true));
  };

  const renderOptions = () => (
    <div className="MainPageContainer">
      <MenuButton
        onClick={() => handleGameChanged("Bulls and Cows")}
        text="Bulls and Cows"
      />
      <MenuButton onClick={() => {}} text="Wordle" />
      <MenuButton onClick={() => {}} text="Recognize the Song" />
      <MenuButton onClick={() => {}} text="Black Jack" />
    </div>
  );
  return currGame ? <Games /> : renderOptions();
};

export default MainPage;
