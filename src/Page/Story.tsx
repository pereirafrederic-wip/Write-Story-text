import { StoryContext, IChapitre } from '../Context/StoryContext';
import Chapitre from './Chapitre';

import './Story.scss';

const Story = () => {
  return (
    <StoryContext.Consumer>
      {({ indexActif, chapitres }) => {
        if (!indexActif) {
          return <h1>{'no chapter'}</h1>;
        }

        const element: IChapitre = chapitres.filter(
          (el: IChapitre) => el.ind === indexActif
        )[0];
        return (
          <div className={'story'}>
            <Chapitre chapitre={element} />
          </div>
        );
      }}
    </StoryContext.Consumer>
  );
};

export default Story;
