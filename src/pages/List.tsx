import { useNavigate } from 'react-router-dom';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import { Center } from '../components/Center';
import styled from 'styled-components';
import { toUpperCaseFirstLetter } from '../utils/utils';
import { SpinnerLoader } from '../components/LoaderSpinner';
import { ButtonLogout } from '../components/Button';

export function List() {
  const navigate = useNavigate();

  const MenuList = ["chihuahua", "husky", "pug", "labrador"];

  return (
    <Container className="pt-3 pb-4">
      <Row>
        <Col md={12} className="pb-5 d-flex justify-content-between">
          <h1>Raças de Cachorros</h1>
          <ButtonLogout />
        </Col>
        <Col md={12} className="pt-5">
          <Center>
            <ListGroupStyled>
              {(MenuList.length === 0) ? <SpinnerLoader /> : <>
                <ListGroupTitleStyled active>
                  Menu
                </ListGroupTitleStyled>
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
        </Col>
      </Row>
    </Container>
  )
}

const ListGroupTitleStyled = styled(ListGroupItem)`
  font-weight: bold;
  font-size: larger;
  background-color: #198754 !important;
  border-color: #198754 !important;
`;

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
