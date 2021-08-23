import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'antd';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { usePersonnageValues } from '../Context/PersonnageContext';
import { useStoryValues } from '../Context/StoryContext';
import { store } from '../Firebase';

import { Select } from 'antd';

const { Option } = Select;

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

  const domOptionsPerso = personnageValues.personnages.map((element, key) => (
    <Option key={key} value={element.ind}>
      {element.nom}
    </Option>
  ));

  const onSubmit = (data) => {
    const { personnage, personnage_id, content } = data;

    let indicePerso;

    console.log('data', data);

    if (!!personnage_id) {
      indicePerso = personnage_id;
    } else {
      if (!!personnage) {
        indicePerso = Math.floor(Math.random() * 100);

        const newPersonnage = {
          ind: indicePerso,
          nom: personnage
        };

        const updatePersonnageList = [
          ...personnageValues.personnages,
          newPersonnage
        ];
        setPersonnageValues({
          ...personnageValues,
          personnages: updatePersonnageList
        });
        store.collection('Personnages').add(newPersonnage);
      }
    }
    const indiceElement = Math.floor(Math.random() * 100);

    const indexChapitre = storyValues.chapitres.findIndex(
      (e) => e.ind === storyValues.indexActif
    );
    console.log('indexChapitre', indexChapitre);
    if (indexChapitre >= 0) {
      const chapitreTouve = storyValues.chapitres[indexChapitre];

      const newChapitre = {
        ind: indiceElement,
        personnageIndex: indicePerso ? indicePerso : null,
        content: content
      };

      const updateElementList = [
        ...storyValues.chapitres[indexChapitre].elements,
        newChapitre
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
      store.collection('Chapitres').add(newChapitre);
    }
  };

  const onReset = (e) => {
    console.log(e, e.target);
    //e.target.reset(); // reset after form submit
  };

  const handleChangeContent = (event: any) => {
    setValue('content', event.target.value);
  };
  const handleChangePersonnage = (indexOption: any) => {
    setValue('personnage', '');
    setValue('personnage_id', indexOption);
  };

  return (
    <div className={'form'}>
      {storyValues && JSON.stringify(storyValues)}
      {personnageValues && JSON.stringify(personnageValues)}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={'row'}>
          <Input
            size="large"
            placeholder="nom Personnage"
            allowClear
            prefix={<UserOutlined />}
            {...register('personnage', { required: false, maxLength: 20 })}
          />
          <Select
            defaultValue=""
            style={{ width: '100%' }}
            allowClear
            onChange={handleChangePersonnage}
          >
            {domOptionsPerso}
          </Select>
        </div>
        {errors.personnage && <p>This length max is 20</p>}
        <br />
        <TextArea
          allowClear
          placeholder="texte"
          {...register('content', { required: true, maxLength: 200 })}
          onChange={handleChangeContent}
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
