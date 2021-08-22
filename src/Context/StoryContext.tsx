import React from 'react';


interface IText {
  index: number;
  personnageIndex : number;
  content : string;
}

interface IChapitre {
  index: number;
  element : Array<IText>;
}

interface Istory {
  indexActif: number;
  chapitres: Array<IChapitre> ;
}

export const StoryContext = React.createContext({ 
  indexActif : 0,
  chapitres: []
} );