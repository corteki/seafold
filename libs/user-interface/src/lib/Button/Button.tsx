import React, { FunctionComponent } from 'react';
import './Button.scss';

/* eslint-disable-next-line */
export interface ButtonProps {
  onClick: (e: React.MouseEvent) => void;
}

export const Button: FunctionComponent<ButtonProps> = ({onClick, children}) => {
  return (
    <div>
      <button
      className='button'
      onClick={onClick}>
        {children}
      </button>
    </div>
  );
};