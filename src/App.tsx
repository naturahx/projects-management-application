import { FC, useState } from "react";
import "./App.css";
import DeveloperPanel from "./components/DeveloperPanel/DeveloperPanel";
import OutputPanel from "./components/OutputPanel/OutputPanel";
import OutputProjects from "./components/OutputProjects/OutputProjects";

const App: FC = () => {
  const [project, setProject] = useState<boolean>(false);
  const [list, setList] = useState<boolean>(false);
  const [titleState, setTitleState] = useState<string>("");
  const [descriptionState, setDescriptionState] = useState<string>("");
  // const [listing, setListing] = useState<string[]>([])

  const updateProject = () => {
    setProject((prevProject) => !prevProject);
    setList(false)
  };

  const updateList = () => {
    setList((prevList) => !prevList);
    setProject(false)
  };

  const handleSubmit = () => {
    setList(false);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleState(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescriptionState(e.target.value);
  };

  return (
    <div className="wrapper">
      <DeveloperPanel updateProject={updateProject} updateList={updateList} />

      {project === false && list === false && (
        <h1 className="title">Добро пожаловать в Project Management!</h1>
      )}

      {project === true && (
        <OutputPanel
          onSubmit={handleSubmit}
          onTitleChange={handleTitleChange}
          onDescriptionChange={handleDescriptionChange}
        />
      )}

      {list === true && (
       <OutputProjects title={titleState} description={descriptionState} />
      )}
    </div>
  );
};

export default App;
