import { FC } from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import style from "./DeveloperPanel.module.css";

interface DeveloperPanelProps {
  updateProject: () => void;
  updateList: () => void;
}

const DeveloperPanel: FC<DeveloperPanelProps> = ({ updateProject, updateList }) => {

  const handleClickAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    updateProject();
  };

  const handleClickList = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    updateList();
  };
  
  return (
    <div className={style.wrapper}>
      <Logo />
      <Button onClick={handleClickAdd}>Добавить проект</Button>
      <Button onClick={handleClickList}>Список проектов</Button>
      <div className={style.quest}>
        <Button>Список задач</Button>
      </div>
      <span className={style.natura}>by naturahx</span>
    </div>
  );
};

export default DeveloperPanel;
