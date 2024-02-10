import React, { FC } from "react";
import style from "./Button.module.css";

interface ButtonProps {
  children: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={style.button}>
      {children}
    </button>
  )
}

export default Button