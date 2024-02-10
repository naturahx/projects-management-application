import { useState } from "react";
import './App.css';
import DeveloperPanel from './components/DeveloperPanel/DeveloperPanel';
import OutputPanel from "./components/OutputPanel/OutputPanel";


function App() {
  const [project, setProject] = useState<boolean>(false);

  const updateProject = () => {
    setProject(prevProject => !prevProject);
    console.log(project)
  }

  return (
    <div className='wrapper'>
      <DeveloperPanel updateProject={updateProject}/> 
      {project === false 
      ? <h1 className="title">Добро пожаловать в Project Managment!</h1>
    : <OutputPanel />
    }
    
    </div>
  );
}

export default App;