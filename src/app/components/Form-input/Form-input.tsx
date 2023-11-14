import { InputHTMLAttributes } from 'react';
import {
  UseFormRegister,
} from 'react-hook-form';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  nameInput: string;
  register: UseFormRegister<any>;
  rules?: any;
  error?: string;
}

const FormInput: React.FC<InputProps> = ({
  label,
  nameInput,
  register,
  rules,
  error,
  ...props
}) => {
  const hasError = !!error;

  return (
    <div className={`content-input content ${hasError ? 'error' : ''}`}>
      <label htmlFor={props.name} className="labelInput">
        {label} <span className="colored-text">*</span>
      </label>
      <input className="inputForm" type="text" {...props} {...register(nameInput, rules)} />
      {error && <ErrorMessage error={error} />}
    </div>
  );
};

export default FormInput;
