import React from 'react';
import ErrorIcon from '../SVG/ErrorIcon';

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return (
    <div className="error-message red-text">
      <ErrorIcon />
      {error}
    </div>
  );
};

export default ErrorMessage;
