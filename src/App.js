import "./App.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <>
      <Header />
      <div className="Main">
        <MainPage />
      </div>
    </>
  );
};

export default App;
