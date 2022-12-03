import React, { useEffect, useState } from 'react';
import { Avatar, Badge, Row, Col, Menu as AntdMenu } from 'antd';
import './App.less';

import styled from 'styled-components';

import { ReactComponent as Logo } from './assets/images/fups.svg'

function Menu() {
  const [items, setItems] = useState([]);
  
  // TODO: useEffect ve fetch kullanarak menu item'lerinin çekilmesi gerekiyor.

  useEffect(() => {
    setItems([
      { label: 'item 1', key: 'item-1' },
      { label: 'item 2', key: 'item-2' },
      {
        label: 'item 3',
        key: 'item-3',
        children: [
          { label: 'item 3.1', key: 'submenu-item-3-1' },
          { label: 'item 3.2', key: 'submenu-item-3-2' }
        ],
      },
    ]);
  }, []);

  return (
    <AntdMenu
      mode="horizontal"
      items={items}
    />
  );
}

const Header = styled.header`
  margin: 24px 40px;
`

const MenuContainer = styled.div`
  ul.ant-menu {
    border-bottom: initial;
  }
`

const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 40% auto;
  align-items: center;

  & {
    .avatar {
      display: grid;
      place-items: center;

      .ant-badge-count {
        padding: 0;
      }
    }

    .details {
      display: flex;
      flex-direction: column;

      .name {
        color: #17171a;
        font-size: 14px;
        font-weight: 600;
      }

      .type {
        color: #909099;
        font-size: 12px;
        font-weight: normal;
      }
    }
  }
`;

function Profile() {
  return (
    <ProfileContainer>
      <div className={"avatar"}>
        <Badge count={1} className={"avatar"}>
          <Avatar src="https://joeschmoe.io/api/v1/random" />
        </Badge>
      </div>
      <div className={"details"}>
        <span className={"name"}>Sercan Cihangir</span>
        <span className={"type"}>Standart Hesap</span>
      </div>
    </ProfileContainer>
  );
}


const Dashboard = () => (
  <>
    <Header>
      <Row>
        <Col xs={{span: 12, order: 1}} md={{span: 2, order: 1}}>
          <LogoContainer><Logo /></LogoContainer>
        </Col>
        <Col xs={{span: 24, order: 3}} md={{span: 18, order: 2}}>
          <MenuContainer><Menu /></MenuContainer>
        </Col>
        <Col xs={{span: 12, order: 2}} md={{span: 4, order: 3}}>
          <Profile />
        </Col>
      </Row>
    </Header>
    <content>
      <div className="site-layout-content">Content</div>
    </content>
  </>
);


const App = () => (
  <div className="App">
    <Dashboard />
  </div>
);

export default App;
