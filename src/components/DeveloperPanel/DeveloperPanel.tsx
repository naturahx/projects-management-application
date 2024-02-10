import { FC } from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import style from "./DeveloperPanel.module.css";

interface DeveloperPanelProps {
  updateProject: () => void;
}

const DeveloperPanel: FC<DeveloperPanelProps> = ({ updateProject }) => {
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    updateProject();
  };
  
  return (
    <div className={style.wrapper}>
      <Logo />
      <Button onClick={handleClick}>Добавить проект</Button>
      <Button>Список проектов</Button>
      <div className={style.quest}>
        <Button>Список задач</Button>
      </div>
      <span className={style.natura}>by naturahx</span>
    </div>
  );
};

export default DeveloperPanel;
