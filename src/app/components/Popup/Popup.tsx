import React from 'react';

import Buttons from '../Buttons/Buttons';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  onClickReset: (e: React.MouseEvent<HTMLElement>) => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, onClickReset }) => {
  return (
    <div className="popup-overlay" style={{ display: isOpen ? 'flex' : 'none' }}>
      <div className="popup-content">
        <div className="popup-title">Очистить форму?</div>
        <div className="popup-text">
          Ваши ответы на все вопросы будут удалены. Это действие нельзя отменить.
        </div>
        <div className="popup-buttons">
          <Buttons label="Отмена" buttonType="button" onClick={onClose} />
          <Buttons label="Очистить форму" buttonType="button" onClick={onClickReset} />
        </div>
      </div>
    </div>
  );
};

export default Popup;
