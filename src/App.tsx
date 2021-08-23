import './styles.scss';
import { PersonnageValueProvider } from './Context/PersonnageContext';
import { StoryValueProvider } from './Context/StoryContext';
import { AuthProvider } from './Context/AuthContext';
import SignIn from './Page/SignIn';
import Nav from './Page/Nav';
import { Router, Route, Switch } from 'react-router';

import Story from './Page/Story';
import { createBrowserHistory } from 'history';

const initialStoryContext = {
  indexActif: 1,
  nom: 'mon livre',
  chapitres: [
    {
      ind: 1,
      nom: 'Au commencement',
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
    },
    {
      ind: 2,
      nom: 'Ensuite',
      elements: []
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
  const history = createBrowserHistory();
  return (
    <div className="App">
      <AuthProvider>
        <PersonnageValueProvider value={initialPersonnageContext}>
          <StoryValueProvider value={initialStoryContext}>
            <Router history={history}>
              <div className="App">
                <Nav />
                <Switch>
                  <Route path="/signin" exact component={SignIn} />
                  <Route path="/story" exact component={Story} />
                </Switch>
              </div>
            </Router>
          </StoryValueProvider>
        </PersonnageValueProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
