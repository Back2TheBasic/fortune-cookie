'use client';

import { ReactNode } from 'react';
import style from './Button.module.scss';

interface IButtonProps {
  children: ReactNode;
  onClick?: () => void;
  shape?: string;
}

const Button = ({ shape = 'default', children, onClick }: IButtonProps) => {
  return (
    <button
      type="button"
      className={`${style.button} ${style[`button--${shape}`]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
