import React from 'react';

export interface IText {
  ind: number;
  personnageIndex: number;
  content: string;
}

export interface IChapitre {
  ind: number;
  element: Array<IText>;
}

interface Istory {
  indexActif: number;
  chapitres: Array<IChapitre>;
}

const el: Istory = {
  indexActif: 0,
  chapitres: []
};

export const StoryContext = React.createContext(el);
