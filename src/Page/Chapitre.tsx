import { IText } from '../Context/StoryContext';
import {
  PersonnageContext,
  IPersonnages,
  IPersonnage
} from '../Context/PersonnageContext';
import './Story.scss';

const domPerso = (personnageIndex: Number) => {
  return (
    <PersonnageContext.Consumer>
      {({ indexActif, personnages }) => {
        if (!personnageIndex) {
          return;
        }
        const elPersonnage = personnages.filter(
          (perso: IPersonnage) => perso.ind === personnageIndex
        )[0];

        return <div className={'personnage'}>{elPersonnage.nom} :</div>;
      }}
    </PersonnageContext.Consumer>
  );
};

const Chapitre = ({ chapitre }) => {
  return (
    <div className={'chapitre'}>
      <h1> {`Chapitre numero ${chapitre.ind}`}</h1>
      <div className={'elements'}>
        {chapitre.element?.map((el: IText, key) => (
          <div className={'element'} key={key}>
            {domPerso(el.personnageIndex)}
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
