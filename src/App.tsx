import './styles.scss';
import { PersonnageValueProvider } from './Context/PersonnageContext';
import { StoryValueProvider } from './Context/StoryContext';
import Story from './Page/Story';
import FormStory from './Page/FormStory';
const initialStoryContext = {
  indexActif: 1,
  chapitres: [
    {
      ind: 1,
      elements: [
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
      <PersonnageValueProvider value={initialPersonnageContext}>
        <StoryValueProvider value={initialStoryContext}>
          <Story />
          <FormStory />
        </StoryValueProvider>
      </PersonnageValueProvider>
    </div>
  );
};

export default App;
