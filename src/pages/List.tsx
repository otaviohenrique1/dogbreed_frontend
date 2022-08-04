import { useNavigate } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Center } from '../components/Center';
import styled from 'styled-components';
import { toUpperCaseFirstLetter } from '../utils/utils';
import { SpinnerLoader } from '../components/LoaderSpinner';

export function List() {
  const navigate = useNavigate();

  const MenuList = ["chihuahua", "husky", "pug", "labrador"];

  return (
    <Center className="d-flex flex-column">
      <h1 className="mb-3">Raças de Cachorros</h1>
      <ListGroupStyled>
        {(MenuList.length === 0) ? <SpinnerLoader /> : <>
          {MenuList.map((item, index) => (
            <ListGroupItemStyled
              key={index}
              action
              onClick={() => navigate(`${item}`)}
            >{toUpperCaseFirstLetter(item)}</ListGroupItemStyled>
          ))}
        </>}
      </ListGroupStyled>
    </Center>
  )
}

const ListGroupItemStyled = styled(ListGroupItem)`
  cursor: pointer;
  &:hover {
    background-color: aliceblue;
  }

  &:active {
    background-color: #99cfff;
  }
`;

const ListGroupStyled = styled(ListGroup)`
  width: 300px;
  text-align: center;
`;
