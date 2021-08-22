import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'antd';
import { Input } from 'antd';
import { UserOutlined, FileTextOutlined } from '@ant-design/icons';

export default function App() {
  const { TextArea } = Input;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
          autoSize={{ minRows: 3, maxRows: 5 }}
          {...register('content', { required: true, maxLength: 200 })}
        />
        <br />
        <div className={'row'}>
          <Button htmlType="submit" type={'primary'}>
            {'enregistrer'}
          </Button>
          <Button htmlType="reset" type={'secondary'}>
            {'annuler'}
          </Button>
        </div>
      </form>
    </div>
  );
}
