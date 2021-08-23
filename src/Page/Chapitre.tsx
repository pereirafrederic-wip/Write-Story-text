import { IText } from '../Context/StoryContext';
import Personnage from './Personnage';

import './Story.scss';

const Chapitre = ({ chapitre }) => {
  return (
    <div className={'chapitre'}>
      <h1> {`Chapitre numero ${chapitre.ind}: ${chapitre.nom}`}</h1>
      <div className={'elements'}>
        {chapitre.elements?.map((el: IText, key) => (
          <div className={'element'} key={key}>
            {!!el.personnageIndex && (
              <Personnage personnageIndex={el.personnageIndex} />
            )}
            <div className={`content ${el.personnageIndex ? 'avec' : 'sans'}`}>
              {el.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chapitre;
