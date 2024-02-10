import Button from "../Button/Button";
import style from "./OutputPanel.module.css";
import { FC } from "react";

interface OutputPanelProps {

}

const OutputPanel: FC<OutputPanelProps> = () => {
  return (
    <div className={style.display}>
      <div className={style.text}>Добавить проект</div>
      <input placeholder="Название проекта ..." className={style.input} />
      <textarea placeholder="Описание проекта ..." className={style.textarea}></textarea>
      <Button style={{ background: 'green', color: 'white' }}>Сохранить проект</Button>
    </div>
  )
}

export default OutputPanel