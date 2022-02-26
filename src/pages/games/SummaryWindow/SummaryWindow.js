import AppNavigation from "../../../components/AppNavigation/AppNavigation";

import "./SummaryWindow.css";

const SummaryWindow = ({ gameStatus }) => {
  const renderMessageAccordingToStatus = () => {
    switch (gameStatus) {
      case "success":
        return (
          <>
            <h1>Congrats!</h1>
            <p>You win in the game</p>
          </>
        );
      default:
        return (
          <>
            <h1>Game Over</h1>
            <p>Why not to try again?</p>
          </>
        );
    }
  };

  return (
    <div className="summaryWrapper">
      {renderMessageAccordingToStatus()}
      <AppNavigation />
    </div>
  );
};

export default SummaryWindow;
