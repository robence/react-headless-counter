import React from 'react';
import './Button.css';

type ButtonType = {
  onClick: (event: React.MouseEvent) => void;
  className?: string;
  children: React.ReactNode;
};

export default function Button(props: ButtonType) {
  const { onClick, className = '', children } = props;

  return (
    <button onClick={onClick} className={`button ${className}`}>
      {children}
    </button>
  );
}
