import { ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  type?: string;
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ type = "default", children, onClick }: ButtonProps) => {
  return (
    <div>
      {type === "default" ? (
        <div className={styles.button} onClick={onClick}>
          {children}
        </div>
      ) : (
        <div
          className={`${styles.button} ${styles.button__circle}`}
          onClick={onClick}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Button;
