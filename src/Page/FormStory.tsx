import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'antd';
import { Input } from 'antd';
import { UserOutlined, FileTextOutlined } from '@ant-design/icons';

export default function App() {
  const { TextArea } = Input;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const onReset = (e) => {
    reset();
    console.log(e, e.target);
    //e.target.reset(); // reset after form submit
  };

  return (
    <div className={'form'}>
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
            htmlType="reset"
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
}
