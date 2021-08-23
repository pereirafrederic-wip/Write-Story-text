import { IPersonnage, usePersonnageValue } from '../Context/PersonnageContext';

const Personnage = ({ personnageIndex }: Number) => {
  const { personnageValues } = usePersonnageValue();
  const { personnages } = personnageValues;

  const elPersonnage = personnages.filter(
    (perso: IPersonnage) => perso.ind === personnageIndex
  )[0];
  return (
    <div className={'personnage'}>{elPersonnage && elPersonnage.nom} :</div>
  );
};

export default Personnage;
