import React from 'react';

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return (
    <div className="error-message red-text">
      <svg width="24px" height="24px" xmlns="https://ssl.gstatic.com/docs/forms/qp_sprite190.svg">
        <path
          d="M 11 15 h 2 v 2 h -2 v -2 Z m 0 -8 h 2 v 6 h -2 V 7 Z m 0.99 -5 C 6.47 2 2 6.48 2 12 s 4.47 10 9.99 10 C 17.52 22 22 17.52 22 12 S 17.52 2 11.99 2 Z M 12 20 c -4.42 0 -8 -3.58 -8 -8 s 3.58 -8 8 -8 s 8 3.58 8 8 s -3.58 8 -8 8 Z"
          fill="rgb(217, 48, 37)"
        />
      </svg>
      {error}
    </div>
  );
};

export default ErrorMessage;
