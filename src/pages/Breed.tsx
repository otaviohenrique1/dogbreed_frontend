import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row } from 'reactstrap';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { UserContextContext } from '../context/userToken';
import styled from 'styled-components';
import { Button, ButtonLogout } from "../components/Button";
import { SpinnerLoader } from "../components/LoaderSpinner";
import { Center } from "../components/Center";
import { api } from '../utils/api';
import { toUpperCaseFirstLetter } from "../utils/utils";
import { MdArrowBack } from 'react-icons/md';

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
  const navigation = useNavigate();

  const ModalSwal = withReactContent(Swal)

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
    <Container className="pt-2 pb-4">
      <Row>
        {(dataDogBreedList.list.length === 0)
          ? <SpinnerLoader />
          : <>
            <Col md={12} className="d-flex justify-content-between mb-3">
              <h1 className="d-flex align-items-center">
                <Button
                  color="link"
                  className="me-2"
                  onClick={() => navigation("/list")}
                >
                  <MdArrowBack size={30} />
                </Button>
                {dataDogBreedList.breed}</h1>
              <ButtonLogout />
            </Col>
            {dataDogBreedList.list.map((item, index) => (
              <Col
                key={index}
                className="mb-2"
              >
                <Center>
                  <Img
                    src={item}
                    alt={`Imagem_${index}`}
                    role="button"
                    tabIndex={index}
                    onClick={() => {
                      return ModalSwal.fire({
                        imageUrl: item,
                        imageAlt: `Imagem_${index}`,
                        confirmButtonText: "Fechar",
                        confirmButtonColor: '#dc3545',
                      })
                    }}
                  />
                </Center>
              </Col>
            ))}
          </>
        }
      </Row>
    </Container>
  )
}

const Img = styled.img`
  height: 150px;
  cursor: pointer;
`;
