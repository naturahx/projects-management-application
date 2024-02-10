import React, { FC } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties
}

const Button: FC<ButtonProps> = ({ children, onClick, style }) => {
  return (
    <button style={style} onClick={onClick} className={styles.button}>
      {children}
    </button>
  )
}

export default Button