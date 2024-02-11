import Button from "../Button/Button";
import style from "./OutputPanel.module.css";
import { ChangeEvent, FC, useState } from "react";

interface OutputPanelProps {
  onSubmit: () => void;
  onTitleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onDescriptionChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const OutputPanel: FC<OutputPanelProps> = ({
  onSubmit,
  onTitleChange,
  onDescriptionChange,
}) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = () => {
    onSubmit();
    setTitle("");
    setDescription("");
  };

  return (
    <div className={style.display}>
      <div className={style.text}>Добавить проект</div>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          onTitleChange(e);
        }}
        placeholder="Название проекта ..."
        className={style.input}
      />
      <input
        placeholder="Описание проекта ..."
        className={style.textarea}
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          onDescriptionChange(e);
        }}
      ></input>
      <Button
        onClick={handleSubmit}
        style={{ background: "green", color: "white" }}
      >
        Сохранить проект
      </Button>
    </div>
  );
};

export default OutputPanel;
