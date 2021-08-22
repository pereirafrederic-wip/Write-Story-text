import React from 'react';

export interface IPersonnage {
  ind: number;
  nom: string;
}

export interface IPersonnages {
  indexActif: number;
  personnages: Array<IPersonnage>;
}

export const PersonnageContext = React.createContext({
  indexActif: 0,
  personnages: []
});
