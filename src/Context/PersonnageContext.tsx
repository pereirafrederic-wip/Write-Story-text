import React from 'react';

interface IPersonnage {
  index: number;
  nom : string;
}

interface IPersonnages {
  indexActif: number;
  personnages: Array<IPersonnage> ;
}

export const PersonnageContext = React.createContext({ 
  indexActif : 0,
  personnages: []
} );