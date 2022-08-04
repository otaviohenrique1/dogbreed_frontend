import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import { api } from '../utils/api';
import { UserContextContext } from '../context/userToken';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';
import { toUpperCaseFirstLetter } from "../utils/utils";
import { SpinnerLoader } from "../components/LoaderSpinner";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

interface DogBreedDataType {
  breed: string;
  list: string[]
}

const initialValues: DogBreedDataType = {
  breed: '',
  list: []
};

export function Breed() {
  const { breed } = useParams();
  const { dataUserContext } = useContext(UserContextContext);
  const [dataDogBreedList, setDataDogBreedList] = useState<DogBreedDataType>(initialValues);
  const MySwal = withReactContent(Swal)

  useEffect(() => {
    api.get(`list?breed=${breed}`, {
      headers: { "Authorization": `${dataUserContext}` }
    })
      .then((data) => {
        console.log(data);
        setDataDogBreedList({
          breed: toUpperCaseFirstLetter(data.data.breed),
          list: data.data.list,
        });
      })
      .catch((error) => console.error(error));
  }, [breed, dataDogBreedList.breed, dataUserContext]);

  return (
    <Container>
      <h1>{dataDogBreedList.breed}</h1>
      <Row>
        {(dataDogBreedList.list.length === 0) ? <SpinnerLoader /> : dataDogBreedList.list.map((item, index) => (
          <Col
            key={index}
            className="mb-2"
            onClick={() => {
              return MySwal.fire({
                imageUrl: item,
                imageAlt: `Imagem_${index}`,
                confirmButtonText: "Fechar",
                confirmButtonColor: '#dc3545',
              })
            }}
          >
            <Img src={item} alt={`Imagem_${index}`} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

const Img = styled.img`
  height: 150px;
  cursor: pointer;
`;
