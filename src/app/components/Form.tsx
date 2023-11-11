import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import ContentText from './Content-text';
import FormInput from './FormInput';
import { inputs } from './inputs';
import Footer from './Footer';

// 1
type Inputs = {
  firstName: string
  phone: string
};
//  2

// interface FormData {
//   firstName: string;
//   phone: string;
// }

// interface MyFormProps {
//   onSubmit: (data: FormData) => void;
// }

const MyForm: React.FC = () => {
  //1
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch('firstName')); // watch input value by passing the name of it
  //2
  // const [formData, setFormData] = useState<FormData>({
  //   firstName: '',
  //   phone: '',
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   onSubmit(formData);
  // };

  return (
    <form className="container content" onSubmit={handleSubmit(onSubmit)}>
      <ContentText />

      {inputs.map((field) => (
        <FormInput
          key={field.nameInput}
          label={field.label}
          nameInput={field.nameInput}
          // handleChange={handleChange}
          {...register('firstName')}
        />
      ))}

      <div className="buttons">
        <button className="button-form" id="send" type="submit">
          Отправить
        </button>
        <button className="button-form" id="clear">
          Очистить форму
        </button>
      </div>
      
      <div className="warning">Никогда не используйте формы Google для передачи паролей.</div>

      <Footer />
    </form>
  );
};

export default MyForm;
