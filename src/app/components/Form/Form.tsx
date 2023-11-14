'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import ContentText from '../Content-text/Content-text';
import FormInput from '../Form-input/Form-input';
import Footer from '../Footer/Footer';
import Buttons from '../Buttons/Buttons';
import Popup from '../Popup/Popup';

interface Inputs {
  firstName: string;
  phone: string;
}

const defaultValues: Inputs = {
  firstName: '',
  phone: '',
};

const MyForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({ defaultValues, mode: 'onBlur' });

  const onSubmit = (data: Inputs) => {
    console.log(data);
    reset();
  }

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleReset = (e: React.MouseEvent<HTMLElement>) => {
    reset();
    closePopup();
  };
  
  return (
    <form className="container content" onSubmit={handleSubmit(onSubmit)}>
      <ContentText />

      <FormInput
        label="Имя"
        nameInput="firstName"
        register={register}
        rules={{ required: { value: true, message: 'Это обязательный вопрос.' } }}
        error={errors.firstName?.message}
        placeholder="Мой ответ"
      />
      <FormInput
        nameInput="phone"
        label="Номер телефона"
        register={register}
        placeholder="Мой ответ"
        error={errors.phone?.message}
        rules={{ required: { value: true, message: 'Это обязательный вопрос.' } }}
      />

      <div className="buttons">
        <Buttons label="Отправить" buttonID="send" buttonType="submit" />
        <Buttons label="Очистить форму" buttonID="clear" buttonType="button" onClick={openPopup} />
      </div>

      <div className="warning">Никогда не используйте формы Google для передачи паролей.</div>

      <Footer />

      <Popup isOpen={isPopupOpen} onClose={closePopup} onClickReset={handleReset} />
    </form>
  );
};

export default MyForm;
function clearErrors() {
  throw new Error('Function not implemented.');
}
