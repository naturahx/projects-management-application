import { useState } from "react";
import './App.css';
import DeveloperPanel from './components/DeveloperPanel/DeveloperPanel';


function App() {
  const [project, setProject] = useState<boolean>(false);

  const updateProject = () => {
    setProject(prevProject => !prevProject);
    console.log(project)
  }

  return (
    <div className='wrapper'>
      <DeveloperPanel updateProject={updateProject}/>
      {/* {project === false 
      ? <h1></h1>
    : <OutputPanel />
    } */}
    
    </div>
  );
}

export default App;