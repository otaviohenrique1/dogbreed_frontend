import React from 'react';
import { Center } from '../components/Center';
import { useNavigate } from "react-router-dom";
import { FormUserTypes } from '../types/types';
import { FormUser } from '../components/Form';
// import { api } from '../utils/api';

export function Register() {
  const navigate = useNavigate();

  function handleSubmit(values: FormUserTypes) {
    // alert(values.email);
    // api.post
    navigate('list');
  }

  return (
    <Center>
      <div>
        <FormUser handleSubmit={handleSubmit} />
      </div>
    </Center>
  )
}
