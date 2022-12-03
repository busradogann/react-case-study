import styled from 'styled-components';

import { Col, Row } from 'antd';

import Logo from './Logo';
import Menu from './Menu';
import Profile from './Profile';


const HeaderContainer = styled.header`
    margin: 24px 40px 70px;
`

const Header = () => (
    <HeaderContainer>
      <Row>
        <Col xs={{span: 12, order: 1}} md={{span: 2, order: 1}}>
          <Logo />
        </Col>
        <Col xs={{span: 24, order: 3}} md={{span: 18, order: 2}}>
          <Menu />
        </Col>
        <Col xs={{span: 12, order: 2}} md={{span: 4, order: 3}}>
          <Profile />
        </Col>
      </Row>
    </HeaderContainer>
);

export default Header;