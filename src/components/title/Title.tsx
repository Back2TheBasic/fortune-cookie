import { ReactNode } from "react";
interface TitleProps {
  children: ReactNode;
}
import style from "./Title.module.scss";

const Title = ({ children }: TitleProps) => {
  return <div className={style.title}>{children}</div>;
};

export default Title;
