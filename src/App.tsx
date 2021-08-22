import './styles.scss';
import { PersonnageContext } from './Context/PersonnageContext';
import { StoryContext } from './Context/StoryContext';
import Story from './Page/Story';

const initialStoryContext = {
  indexActif: 1,
  chapitres: [
    {
      ind: 1,

      element: [
        {
          ind: 1,
          personnageIndex: 0,
          content: 'il y a très très longtemps'
        },
        {
          ind: 2,
          personnageIndex: 1,
          content: 'Bonjour, ça va ?'
        },
        {
          ind: 3,
          personnageIndex: 2,
          content: 'Bonjour, ça va et vous ?'
        }
      ]
    }
  ]
};

const initialPersonnageContext = {
  indexActif: 0,
  personnages: [
    { ind: 1, nom: 'Mr package' },
    { ind: 2, nom: 'gerard le bouvier' }
  ]
};

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
};

export default App;
