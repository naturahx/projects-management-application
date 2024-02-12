import { FC, useState } from "react";
import style from "./OutputProjects.module.css";
import Button from "../Button/Button";

interface OutputProjectsProps {
  title: string;
  description: string;
}

const OutputProjects: FC<OutputProjectsProps> = ({ title, description }) => {
  const [projectTitle, setProjectTitle] = useState<string>(title);
  const [projectDescription, setDescription] = useState<string>(description);

  const handleDelete = () => {
    setProjectTitle("");
    setDescription("");
  };

  return (
    <div className={style.display}>
      <div className={style.text}>{title}</div>
      <div className={style.subtext}>{description}</div>
      <Button
        onClick={handleDelete}
        style={{
          background: "red",
          color: "white",
          position: "absolute",
          bottom: "0",
          marginLeft: "50px",
        }}
      >
        Удалить
      </Button>
    </div>
  );
};

export default OutputProjects;
