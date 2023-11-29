import React from "react";
import Button from "@/components/button/Button";
import style from "./SelectedCookies.module.scss";
import Title from "@/components/title/Title";
interface SelectedCookiesProps {
  selectedCookie: (cookie: number) => void;
}
const SelectedCookies = ({ selectedCookie }: SelectedCookiesProps) => {
  const buttons = ["선택1", "선택2", "선택3"];

  return (
    <div className={style.container}>
      <header>
        <Title>쿠키를 선택해주세요</Title>
      </header>
      <div className={style.button_container}>
        {buttons.map((buttonText, index) => (
          <Button
            key={index}
            type="circle"
            onClick={selectedCookie.bind(this, index + 1)}
          >
            {buttonText}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SelectedCookies;
