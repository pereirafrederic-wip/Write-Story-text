import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useStoryValues } from '../Context/StoryContext';
import { Link, useHistory } from 'react-router-dom';
import firebaseApp from '../Firebase';
import './Story.scss';

export default function Nav() {
  //get the user state from context
  const { user } = useContext(AuthContext);
  const history = useHistory();

  //if user exists, display user name and picture.
  //else, show a sign in button instead
  const { storyValues, setStoryValues } = useStoryValues();

  const handleChangeChapitre = (event, ind: number) => {
    event.preventDefault();
    history.push('/story');
    setStoryValues({
      ...storyValues,
      indexActif: ind
    });
  };
  console.log('storyValues.indexActif', storyValues.indexActif);
  return (
    <div className="account">
      {!!user ? (
        <div className="dropdown">
          <p>{`Welcome, ${user.displayName}`}</p>
          <div className="nav">
            <Link to="/story/new">Create Stories</Link>
            <div className="nav-chapitre">
              {storyValues.chapitres.map((chapitre, key) => (
                <Link
                  key={key}
                  to={`/story`}
                  onClick={(e) => handleChangeChapitre(e, chapitre.ind)}
                >
                  {chapitre.nom}
                </Link>
              ))}
            </div>
            <Link to={`/`} onClick={() => firebaseApp.auth().signOut()}>
              Sign Out
            </Link>
          </div>
        </div>
      ) : (
        <Link to="/signin">
          <button>SIGN IN/ REGISTER</button>
        </Link>
      )}
    </div>
  );
}
