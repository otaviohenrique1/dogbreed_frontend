import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Center } from '../components/Center';
import styled from 'styled-components';

export function List() {
  const navigate = useNavigate();

  return (
    <Center>
      <ListGroupStyled>
        <ListGroupItemStyled
          action
          onClick={() => {
            navigate("/chihuahua");
          }}
        >Chihuahua</ListGroupItemStyled>
        <ListGroupItemStyled
          action
          onClick={() => {
            navigate("/husky");
          }}
        >Husky</ListGroupItemStyled>
        <ListGroupItemStyled
          action
          onClick={() => {
            navigate("/labrador");
          }}
        >Labrador</ListGroupItemStyled>
        <ListGroupItemStyled
          action
          onClick={() => {
            navigate("/pug");
          }}
        >Pug</ListGroupItemStyled>
      </ListGroupStyled>
    </Center>
  )
}

const ListGroupItemStyled = styled(ListGroupItem)`
  cursor: pointer;
`;

const ListGroupStyled = styled(ListGroup)`
  width: 300px;
`;
