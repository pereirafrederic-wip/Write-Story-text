import { IPersonnage, usePersonnageValues } from '../Context/PersonnageContext';

const Personnage = ({ personnageIndex }: Number) => {
  const { personnageValues } = usePersonnageValues();

  console.log('personnageValues.personnages', personnageValues.personnages);
  const elPersonnage = personnageValues.personnages.filter(
    (perso: IPersonnage) => perso.ind === personnageIndex
  )[0];
  return <div className={'personnage'}>{elPersonnage?.nom} :</div>;
};

export default Personnage;
