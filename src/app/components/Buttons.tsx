interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  label: string;
  buttonID: string;
  buttonType: string;
}

const Buttons: React.FC<ButtonProps> = ({ label, onClick, buttonID, buttonType }) => {
  return (
    <div>
      <input
        className="button-form"
        id={buttonID}
        onClick={onClick}
        type={buttonType}
        value={label}
      ></input>
    </div>
  );
};

export default Buttons;
