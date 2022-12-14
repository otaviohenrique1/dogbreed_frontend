import { useContext } from 'react';
import { Center } from '../components/Center';
import { useNavigate } from "react-router-dom";
import { UserContextContext } from '../context/userToken';
import { api } from '../utils/api';
import { FormUserTypes } from '../utils/types';
import { FormUser } from '../components/Form';

export function Register() {
  const { setDataUserContext } = useContext(UserContextContext);
  const navigate = useNavigate();

  function handleSubmit(values: FormUserTypes) {
    // alert(values.email);
    api.post("register", { email: values.email })
      .then((data) => {
        console.log(data);
        // console.log(data.data.user.token);
        setDataUserContext(data.data.user.token);

        navigate('list');
      })
      .catch((error) => {
        alert("Não encontrado");
        console.error(error);
      });
  }

  return (
    <Center>
      <div className="d-flex flex-column">
        <h1>Login</h1>
        <FormUser handleSubmit={handleSubmit} />
      </div>
    </Center>
  )
}
