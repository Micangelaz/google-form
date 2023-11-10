'use client';
// адаптив 
// стили размер шрифтов pt
//валидация номера
import React from 'react';
import Form from './components/Form';

import '../scss/style.css';
import ContentText from './components/Content-text';
import FormInput from './components/FormInput';
import {inputs} from './components/inputs'
import Footer from './components/Footer';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Form Data:', data);
  };

  return (
    <form className="container content">
      <ContentText />

      {inputs.map((field) => (
        <FormInput key={field.nameInput} label={field.label} nameInput={field.nameInput} />
      ))}

      <Footer />

      {/* <Form onSubmit={handleSubmit} /> */}
    </form>
  );
};

export default App;
