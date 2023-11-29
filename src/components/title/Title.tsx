import { ReactNode } from 'react';
import style from './Title.module.scss';

interface ITitleProps {
  children: ReactNode;
}

const Title = ({ children }: ITitleProps) => {
  return <h1 className={style.title}>{children}</h1>;
};

export default Title;
