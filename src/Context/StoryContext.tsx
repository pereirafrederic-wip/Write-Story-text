import React, { useContext, useState, useEffect } from 'react';
import { IProvider, IValue } from './InterfaceContext';
import { db } from '../Firebase';

export interface IText {
  ind: number;
  personnageIndex: number;
  content: string;
}

export interface IChapitre {
  ind: number;
  nom: string;
  elements: Array<IText>;
}

interface IStory {
  indexActif: number;
  nom: string;
  chapitres: Array<IChapitre>;
}

const StoryContext = React.createContext(null);

export const StoryValueProvider = ({
  value = {
    indexActif: 0,
    nom: '',
    chapitres: []
  },
  children = null
}): IProvider<IStory> => {
  const [storyValues, setStoryValues] = useState(value);

  const valueInitiale: IValue<IStory> = { storyValues, setStoryValues };

  const fetchPersonnages = async () => {
    const response = db.collection('Chapitres');
    const data = await response.get();
    setStoryValues({
      ...storyValues,
      chapitres: [...storyValues.chapitres, ...data.docs]
    });
  };

  useEffect(() => {
    fetchPersonnages();
  }, [storyValues]);

  return (
    <StoryContext.Provider value={valueInitiale}>
      {children}
    </StoryContext.Provider>
  );
};

export const useStoryValues = () => {
  const context = useContext(StoryContext);
  if (!context)
    throw new Error('useStoryValue must be used with a StoryValueProvider');

  return context;
};
