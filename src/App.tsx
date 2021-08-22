import "./styles.scss";
import {PersonnageContext} from './Context/PersonnageContext'
import {StoryContext} from './Context/StoryContext'
import { Story } from './Page/Story'


const initialStoryContext ={  indexActif : 0,
        chapitres: []};

const initialPersonnageContext ={  indexActif : 0,
        personnages: []};

const App = () => {
  return (
    <div className="App">
    <PersonnageContext.Provider value={initialPersonnageContext}>
    <StoryContext.Provider value={initialStoryContext}>
      

      <Story />
        </StoryContext.Provider>
        </PersonnageContext.Provider>
    </div>
  );
}

export default App;