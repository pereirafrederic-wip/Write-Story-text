import React, { useContext, useState } from 'react';
import { IProvider, IValue } from './InterfaceContext';

export interface IPersonnage {
  ind: number;
  nom: string;
}

export interface IPersonnages {
  indexActif: number;
  personnages: Array<IPersonnage>;
}

const PersonnageContext = React.createContext({
  indexActif: 0,
  personnages: []
});

export const PersonnageValueProvider = ({
  value = null,
  children
}): IProvider<IPersonnages> => {
  const [personnageValues, setPersonnageValues] = useState(value);
  const valueInitiale: IValue<IPersonnages> = {
    personnageValues,
    setPersonnageValues
  };
  return (
    <PersonnageContext.Provider value={valueInitiale}>
      {children}
    </PersonnageContext.Provider>
  );
};

export const usePersonnageValue = () => {
  const context = useContext(PersonnageContext);
  if (!context)
    throw new Error(
      'usePersonnageValue must be used with a PersonnageValueProvider'
    );

  return context;
};
