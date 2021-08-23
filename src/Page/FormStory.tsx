import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'antd';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { usePersonnageValues } from '../Context/PersonnageContext';
import { useStoryValues } from '../Context/StoryContext';

export default () => {
  const { TextArea } = Input;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const { storyValues, setStoryValues } = useStoryValues();
  const { personnageValues, setPersonnageValues } = usePersonnageValues();

  const onSubmit = (data) => {
    const { personnage, content } = data;
    console.group('submit');
    console.log('personnage', personnage);
    console.log('content', content);
    console.log('personnageValues', personnageValues);
    console.log('personnageValues?.personnages', personnageValues?.personnages);
    console.log('storyValues', storyValues);
    console.log('storyValues?.chapitres', storyValues?.chapitres);
    console.groupEnd();

    const indicePerso = Math.floor(Math.random() * 100);
    console.log('personnageValues?.personnages', personnageValues?.personnages);
    debugger;
    const newList = [
      ...personnageValues.personnages,
      {
        ind: indicePerso,
        nom: personnage
      }
    ];
    console.log('newList', newList);
    setPersonnageValues({
      ...personnageValues,
      personnages: newList
    });

    const indiceStory = Math.floor(Math.random() * 100);
    const indiceChapitre = Math.floor(Math.random() * 100);
    const newChapitre = [
      ...storyValues.chapitres,
      {
        ind: indiceStory,
        element: {
          ind: indiceChapitre,
          personnageIndex: indicePerso,
          content: content
        }
      }
    ];
    console.log('newList', newChapitre);
    setStoryValues({
      ...storyValues,
      chapitres: newChapitre
    });
  };

  const onReset = (e) => {
    console.log(e, e.target);
    //e.target.reset(); // reset after form submit
  };

  return (
    <div className={'form'}>
      {storyValues && JSON.stringify(storyValues)}
      {personnageValues && JSON.stringify(personnageValues)}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          size="large"
          placeholder="nom Personnage"
          prefix={<UserOutlined />}
          {...register('personnage', { required: false, maxLength: 20 })}
        />
        <br />
        <TextArea
          placeholder="texte"
          autoSize={{ minRows: 3, maxRows: 10 }}
          {...register('content', { required: true, maxLength: 200 })}
        />
        {errors.contentd && <p>This is required</p>}
        <br />
        <div className={'row'}>
          <Button htmlType="submit" type={'primary'}>
            {'enregistrer'}
          </Button>
          <Button
            htmlType="button"
            type={'primary'}
            danger
            onClick={(e) => onReset(e)}
          >
            {'annuler'}
          </Button>
        </div>
      </form>
    </div>
  );
};
