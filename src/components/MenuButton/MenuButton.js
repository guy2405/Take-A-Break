import "./MenuButton.css";

const MenuButton = ({ onClick, text }) => {
  return (
    <button className="MenuButton" onClick={onClick}>
      {text}
    </button>
  );
};

export default MenuButton;
