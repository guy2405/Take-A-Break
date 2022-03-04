import "./MenuButton.css";

const MenuButton = ({ onClick, text }) => {
  return (
    <button className="MenuButton" onClick={onClick}>
      <h1>{text}</h1>
    </button>
  );
};

export default MenuButton;
