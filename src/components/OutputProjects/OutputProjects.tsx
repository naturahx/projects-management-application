import { FC } from "react";
import style from "./OutputProjects.module.css";


interface OutputProjectsProps {
  title: string;
  description: string;
}

const OutputProjects: FC<OutputProjectsProps> = ({ title, description }) => {

  return (
    <div className={style.display}>
      <div className={style.text}>{title}</div>
      <div className={style.subtext}>{description}</div>
    </div>
  )
}

export default OutputProjects