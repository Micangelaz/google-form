import { InputHTMLAttributes } from "react";
import {
  // FieldValues,
  // InputValidationRules,
  UseFormRegister,
  // UseFormRegisterReturn,
} from "react-hook-form";

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
  return (
    <div className="content-input content">
      <label htmlFor={props.name} className="labelInput">
        {label} <span className="colored-text">*</span>
      </label>
      <input
        className="inputForm"
        type="text"
        placeholder="Мой ответ"
        {...register(nameInput, rules)}
      />
      {error && <div className="error-message"> картинка {error}</div>}
    </div>
  );
};

export default FormInput;
