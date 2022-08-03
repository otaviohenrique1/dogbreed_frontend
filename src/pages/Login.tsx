import { Center } from '../components/Center';
import { Link, useNavigate } from "react-router-dom";
import { FormUserTypes } from '../types/types';
import { FormUser } from '../components/Form';
import { api } from '../utils/api';

export function Login() {
  const navigate = useNavigate();

  function handleSubmit(values: FormUserTypes) {
    // alert(values.email);
    api.post("register", { email: values.email })
      .then((data) => {
        console.log(data);

        // navigate('list');
      })
      .catch((error) => {
        alert("Não encontrado")
        console.error(error);
      });
  }

  return (
    <Center>
      <div className="d-flex flex-column">
        <h1>Novo usuário</h1>
        <FormUser handleSubmit={handleSubmit} />
        <Link
          className="mt-2 btn btn-link"
          to="/register"
        >Voltar</Link>
      </div>
    </Center>
  )
}
