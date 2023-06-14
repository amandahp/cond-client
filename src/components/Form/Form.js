import { useForm } from 'react-hook-form';

import "./Form.styles.css";

export const Form = ({onSubmit}) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Nome</label>
        <input 
          className='input-form'
          type="text"
          id="name"
          {...register('name')}
        />
      </div>
      <div>
        <label htmlFor="phone">Telefone </label>
        <input 
          className='input-form'
          type="tel"
          id="tel"
          {...register('phone')}
        />
       
      </div>
      <div>
        <label htmlFor="appartament">Apartamento</label>
        <input 
          className='input-form'
          type="text"
          id="appartament"
          {...register('appartament')}
        />
      </div>
      <div>
        <label htmlFor="parkingNumber">Número da Garagem</label>
        <input 
          className='input-form'
          type="text"
          id="parkingNumber"
          {...register('parkingNumber')}
        />
      </div>
      <div>
        <label htmlFor="emergencyContact">Número de Eomergência</label>
        <input 
          className='input-form'
          type="tel"
          id="emergencyContact"
          {...register('emergencyContact')}
        />
      </div>
      <button className='submit' type="submit">Adicionar Novo Residente</button>
    </form>
  );
};

