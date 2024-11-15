import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick} style={{ padding: '8px 16px', fontSize: '16px' }}>
    {label}
  </button>
);

export default Button;
