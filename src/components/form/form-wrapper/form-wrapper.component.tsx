import React from 'react';
// import { Button } from '../../buttons/button';
import { Field } from '../form.types';
import { useFormWrapper } from './form-wrapper.hooks';


interface FormWrapperProps {
    fields: Field[];
}

export function FormWrapper({ fields }:FormWrapperProps) {

  const { handleSubmit, handleFields } = useFormWrapper(fields);

  return (
    <form onSubmit={e => handleSubmit(e)} noValidate>
      {handleFields()}
      <button type="submit">submit</button>
      {/* <Button type="submit" text="submit" /> */}
    </form>
  );
}
