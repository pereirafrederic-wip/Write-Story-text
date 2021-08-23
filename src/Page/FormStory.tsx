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
    setValue,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const { storyValues, setStoryValues } = useStoryValues();
  const { personnageValues, setPersonnageValues } = usePersonnageValues();

  const onSubmit = (data) => {
    const { personnage, content } = data;

    let indicePerso;
    if (!!personnage) {
      indicePerso = Math.floor(Math.random() * 100);

      const updatePersonnageList = [
        ...personnageValues.personnages,
        {
          ind: indicePerso,
          nom: personnage
        }
      ];
      setPersonnageValues({
        ...personnageValues,
        personnages: updatePersonnageList
      });
    }

    const indiceElement = Math.floor(Math.random() * 100);

    const indexChapitre = storyValues.chapitres.findIndex(
      (e) => e.ind === storyValues.indexActif
    );
    console.log('indexChapitre', indexChapitre);
    if (indexChapitre >= 0) {
      const chapitreTouve = storyValues.chapitres[indexChapitre];

      const updateElementList = [
        ...storyValues.chapitres[indexChapitre].elements,
        {
          ind: indiceElement,
          personnageIndex: indicePerso ? indicePerso : null,
          content: content
        }
      ];
      console.log('updateElementList', updateElementList);

      storyValues.chapitres.splice(indexChapitre, 1);
      const updateChapitreList = [
        ...storyValues.chapitres,
        {
          ...chapitreTouve,
          elements: updateElementList
        }
      ];
      console.log('updateChapitreList', updateChapitreList);
      setStoryValues({
        ...storyValues,
        chapitres: updateChapitreList
      });
    }
  };

  const onReset = (e) => {
    console.log(e, e.target);
    //e.target.reset(); // reset after form submit
  };

  const handleChange = (event: any) => {
    setValue('content', event.target.value);
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
        {errors.personnage && <p>This length max is 20</p>}
        <br />
        <TextArea
          placeholder="texte"
          {...register('content', { required: true, maxLength: 200 })}
          onChange={handleChange}
        />
        {errors.content && <p>This is required and max 200</p>}
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
