interface InputProps {
  label: string;
  nameInput: string;
  // handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const FormInput: React.FC<InputProps> = ({ label, nameInput }) => {
  return (
    <div className="content-input content">
      <label htmlFor={nameInput} className="labelInput">
        {label} <span className="colored-text">*</span>
      </label>
      <input
        className="inputForm"
        type="text"
        name={nameInput}
        id={nameInput}
        placeholder="Мой ответ"
        required
      />
    </div>
  );
};

export default FormInput;
