import { useStoryValues, IChapitre } from '../Context/StoryContext';
import Chapitre from './Chapitre';
import FormStory from './FormStory';
import './Story.scss';

const Story = () => {
  const { storyValues } = useStoryValues();

  const { indexActif, chapitres } = storyValues;

  if (!indexActif) {
    return <h1>{'no chapter'}</h1>;
  }

  const element: IChapitre = chapitres.filter(
    (el: IChapitre) => el.ind === indexActif
  )[0];

  return (
    <div className={'story'}>
      {indexActif}
      <Chapitre chapitre={element} />
      <FormStory />
    </div>
  );
};

export default Story;
