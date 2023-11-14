import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  label: string;
  buttonID?: string;
}

const Buttons: React.FC<ButtonProps> = ({ label, onClick, buttonID, ...props }) => {
  return (
    <div>
      <button className="button-form" id={buttonID} onClick={onClick} {...props}>
        {label}
      </button>
    </div>
  );
};

export default Buttons;
