import { useNavigate } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Center } from '../components/Center';
import styled from 'styled-components';
import { toUpperCaseFirstLetter } from '../utils/utils';

export function List() {
  const navigate = useNavigate();

  const MenuList = ["chihuahua", "husky", "pug", "labrador"];

  return (
    <Center>
      <ListGroupStyled>
        {MenuList.map((item, index) => (
          <ListGroupItemStyled
            key={index}
            action
            onClick={() => navigate(`${item}`)}
          >{toUpperCaseFirstLetter(item)}</ListGroupItemStyled>
        ))}
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
`;
