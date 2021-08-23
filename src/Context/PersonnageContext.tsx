import React, { useContext, useState, useEffect } from 'react';
import { IProvider, IValue } from './InterfaceContext';
import { store } from '../Firebase';

export interface IPersonnage {
  ind: number;
  nom: string;
}

export interface IPersonnages {
  indexActif: number;
  personnages: Array<IPersonnage>;
}

const PersonnageContext = React.createContext(null);

export const PersonnageValueProvider = ({
  value = {
    indexActif: 0,
    personnages: []
  },
  children
}): IProvider<IPersonnages> => {
  const [personnageValues, setPersonnageValues] = useState(value);
  const valueInitiale: IValue<IPersonnages> = {
    personnageValues,
    setPersonnageValues
  };

  const fetchPersonnages = async () => {
    const response = store.collection('Personnages');
    const data = await response.get();

    setPersonnageValues({
      ...personnageValues,
      personnages: [...personnageValues.personnages, ...data.docs]
    });
  };

  useEffect(() => {
    fetchPersonnages();
  }, []);
  return (
    <PersonnageContext.Provider value={valueInitiale}>
      {children}
    </PersonnageContext.Provider>
  );
};

export const usePersonnageValues = () => {
  const context = useContext(PersonnageContext);
  if (!context)
    throw new Error(
      'usePersonnageValue must be used with a PersonnageValueProvider'
    );

  return context;
};
