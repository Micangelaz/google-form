interface ButtonProps {
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    label: string;
    buttonID: string;
  }

const Buttons: React.FC<ButtonProps> = ({label, onClick, buttonID}) => {
    return (

        <div>
        {/* <button className="button-form" id="send" type="submit">
          {label}Отправить
        </button> */}
        <button className="button-form" id={buttonID} onClick={onClick}>
          {label}
        </button>
      </div>
    );
  };
  
  export default Buttons;
  