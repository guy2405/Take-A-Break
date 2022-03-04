import { useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DoneIcon from "@mui/icons-material/Done";
import { setCurrGameData, setCurrGameSpecificData } from "../../../AppSlice";
import { IconButton } from "@mui/material";
import SummaryWindow from "../SummaryWindow/SummaryWindow";

import "./BullsAndCows.css";
import { useDispatch, useSelector } from "react-redux";

const COLORS = [
  { colorName: "white", colorCode: "#FFFFFF" },
  { colorName: "blue", colorCode: "#1B6DFF" },
  { colorName: "green", colorCode: "#68BC12" },
  { colorName: "yellow", colorCode: "#F9FF1C" },
  { colorName: "red", colorCode: "#E0310C" },
  { colorName: "purple", colorCode: "#AD10FF" },
];

const NUM_OF_TURNS = 12;
const NUM_OF_COLORS_IN_TURN = 4;
const BULLS_COLOR = "red";
const COWS_COLOR = "blue";

const BullsAndCows = () => {
  const chosenColors = useSelector(
    (state) => state.app?.gameData?.chosenColors
  );
  const turn = useSelector((state) => state.app?.gameData?.turn);
  const guessPlace = useSelector((state) => state.app?.gameData?.guessPlace);
  const userGuess = useSelector((state) => state.app?.gameData?.userGuess);
  const resultPins = useSelector((state) => state.app?.gameData?.resultPins);
  const gameOver = useSelector((state) => state.app?.gameData?.gameOver);

  const dispatch = useDispatch();

  const updateField = (fieldName, newVal) => {
    dispatch(setCurrGameSpecificData({ fieldName, newVal }));
  };

  useEffect(() => {
    const restartGame = () => {
      const chosenColors = chooseRandom(COLORS, NUM_OF_COLORS_IN_TURN);
      return {
        chosenColors,
        turn: 0,
        guessPlace: 0,
        userGuess: [[]],
        resultPins: [],
        gameOver: false,
      };
    };
    if (chosenColors) return;
    dispatch(setCurrGameData(restartGame()));
  }, [chosenColors, dispatch]);

  const chooseRandom = (arr, num = 1) => {
    const res = [];
    for (let i = 0; i < num; ) {
      const random = Math.floor(Math.random() * arr.length);
      if (res.indexOf(arr[random]) !== -1) {
        continue;
      }
      res.push(arr[random]);
      i++;
    }
    return res;
  };

  const renderColors = () => {
    const onColorClicked = (colorCode) => {
      if (guessPlace === NUM_OF_COLORS_IN_TURN) return;
      const guessTurnArr = userGuess[turn];
      const newGuessTurnArr = guessTurnArr.concat(colorCode);
      const otherArr = userGuess.slice(0, turn);
      updateField("userGuess", otherArr.concat([newGuessTurnArr]));
      updateField("guessPlace", guessPlace + 1);
    };

    return COLORS.map((color, index) => (
      <div
        key={(color, index)}
        className="colorWrapper"
        style={{ backgroundColor: color.colorCode }}
        onClick={() => onColorClicked(color.colorCode)}
      />
    ));
  };

  const renderGuesses = () => {
    const colorGen = (turnGuess, placeIndex) =>
      turn > turnGuess || (turn === turnGuess && placeIndex < guessPlace)
        ? userGuess[turnGuess][placeIndex]
        : "inherit";
    return [...Array(NUM_OF_TURNS).keys()].map((num) => (
      <div className="guessWrapper" key={`guess${num}`}>
        {[...Array(NUM_OF_COLORS_IN_TURN).keys()].map((placeInside) => (
          <div
            className="guessColor"
            key={`placeInside${placeInside}`}
            style={{ backgroundColor: colorGen(num, placeInside) }}
          />
        ))}
      </div>
    ));
  };
  const renderResults = () => {
    const bgPin = (currTurn, pinIndex) =>
      currTurn < turn ? resultPins[currTurn][pinIndex] : "inherit";

    return [...Array(NUM_OF_TURNS).keys()].map((num) => (
      <div className="guessResultWrapper" key={`result${num}`}>
        {[...Array(NUM_OF_COLORS_IN_TURN).keys()].map((pinIndex) => (
          <div
            className="guessResultPin"
            key={`pin${pinIndex}`}
            style={{ backgroundColor: bgPin(num, pinIndex) }}
          />
        ))}
      </div>
    ));
  };

  const onBackIconClicked = () => {
    const guessTurnArr = userGuess[turn];
    const newGuessTurnArr = guessTurnArr.slice(0, guessPlace - 1);
    const otherArr = userGuess.slice(0, turn);
    updateField("userGuess", otherArr.concat([newGuessTurnArr]));
    updateField("guessPlace", guessPlace - 1);
  };

  const onDoneIconClicked = () => {
    const resultCurrTurnArr = [];
    let bullsCounter = 0;
    for (let index = 0; index < NUM_OF_COLORS_IN_TURN; index++) {
      if (chosenColors[index].colorCode === userGuess[turn][index]) {
        resultCurrTurnArr.push(BULLS_COLOR);
        bullsCounter = bullsCounter + 1;
      } else if (
        chosenColors.find((color) => color.colorCode === userGuess[turn][index])
      )
        resultCurrTurnArr.push(COWS_COLOR);
      else resultCurrTurnArr.push("inherit");
    }
    updateField("resultPins", resultPins.concat([resultCurrTurnArr]));
    updateField("turn", turn + 1);
    updateField("guessPlace", 0);
    updateField("userGuess", [...userGuess, []]);
    if (bullsCounter === NUM_OF_COLORS_IN_TURN || turn === NUM_OF_TURNS)
      updateField("gameOver", true);
  };

  return (
    <>
      <div className="wrapper">
        {gameOver ? <SummaryWindow gameStatus="success" /> : null}

        <div className="optionsWrapper">
          <div className="colorOptions"> {renderColors()}</div>
          <div className="controlsWrapper">
            <IconButton onClick={onBackIconClicked} disabled={guessPlace === 0}>
              <ArrowBackIcon fontSize="large" className="arrowBack" />
            </IconButton>

            <IconButton
              onClick={onDoneIconClicked}
              disabled={guessPlace < NUM_OF_COLORS_IN_TURN}
            >
              <DoneIcon fontSize="large" className="doneIcon" />
            </IconButton>
          </div>
        </div>
        <div className="boardWrapper">
          <div className="boardGuess">{renderGuesses()}</div>
          <div className="boardResult">{renderResults()}</div>
        </div>
      </div>
    </>
  );
};

export default BullsAndCows;
