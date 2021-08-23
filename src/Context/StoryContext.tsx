import React, { useContext, useState } from 'react';
import { IProvider, IValue } from './InterfaceContext';

export interface IText {
  ind: number;
  personnageIndex: number;
  content: string;
}

export interface IChapitre {
  ind: number;
  element: Array<IText>;
}

interface IStory {
  indexActif: number;
  chapitres: Array<IChapitre>;
}

const el: IStory = {
  indexActif: 0,
  chapitres: []
};

const StoryContext = React.createContext(el);

export const StoryValueProvider = ({
  value = null,
  children = null
}): IProvider<IStory> => {
  const [storyValues, setStoryValues] = useState(value);

  const valueInitiale: IValue<IStory> = { storyValues, setStoryValues };

  return (
    <StoryContext.Provider value={valueInitiale}>
      {children}
    </StoryContext.Provider>
  );
};

export const useStoryValue = () => {
  const context = useContext(StoryContext);
  if (!context)
    throw new Error('useStoryValue must be used with a StoryValueProvider');

  return context;
};
