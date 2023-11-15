'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import ContentText from '../ContentText/ContentText';
import FormInput from '../FormValues/FormValues';
import Footer from '../Footer/Footer';
import Buttons from '../Buttons/Buttons';
import Popup from '../Popup/Popup';
import {Inputs, defaultValues} from '../Form/Inputs';


const MyForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    clearErrors,
  } = useForm<Inputs>({ defaultValues, mode: 'onBlur' });

  const onSubmit = (data: Inputs) => {
    console.log(data);
    reset();
  };

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleReset = (e: React.MouseEvent<HTMLElement>) => {
    reset();
    clearErrors();
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
        <Buttons label="Отправить" buttonID="send" type="submit" />
        <Buttons label="Очистить форму" buttonID="clear" type="button" onClick={openPopup} />
      </div>

      <div className="warning">Никогда не используйте формы Google для передачи паролей.</div>

      <Footer />

      <Popup isOpen={isPopupOpen} onClose={closePopup} onClickReset={handleReset} />
    </form>
  );
};

export default MyForm;
