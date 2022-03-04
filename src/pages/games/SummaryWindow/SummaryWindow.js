import AppNavigation from "../../../components/AppNavigation/AppNavigation";

import "./SummaryWindow.css";

const SummaryWindow = ({ gameStatus }) => {
  const renderMessageAccordingToStatus = () => {
    switch (gameStatus) {
      case "success":
        return (
          <>
            <h1>Congrats!</h1>
            <h2>You win in the game</h2>
          </>
        );
      default:
        return (
          <>
            <h1>Game Over</h1>
            <h2>Why not to try again?</h2>
          </>
        );
    }
  };

  return (
    <div className="summaryWrapper">
      {renderMessageAccordingToStatus()}
      <div>
        <AppNavigation excludeInfo={true} />
      </div>
    </div>
  );
};

export default SummaryWindow;
