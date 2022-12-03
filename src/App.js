import { Avatar, Badge, Carousel, Col, Menu as AntdMenu, Row } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import './App.less';

import styled from 'styled-components';

import { ReactComponent as ArrowLeft } from './assets/images/slider-arrow-left.svg';
import { ReactComponent as ArrowRight } from './assets/images/slider-arrow-right.svg';

import Header from './components/Header';
import Campaigns from './components/Campaigns';

const Section = styled.section`
  padding: 0 40px;
`

const SectionTitle = styled.h3`
  color: #17171a;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 24px 40px;
`

const Dashboard = () => {
  const sliderRef = useRef();

  return (<>
    <Header />
    <Section>
      <Row>
        <Col span={22}><SectionTitle>SİZE ÖZEL KAMPANYALAR</SectionTitle></Col>
        <Col>
            <a onClick={() => sliderRef.current.prev()}>
            <ArrowLeft />
          </a>
          <a onClick={() => sliderRef.current.next()}>
          <ArrowRight />
          </a>
        </Col>
      </Row>
      <Campaigns sliderRef={sliderRef} />
    </Section>
  </>);
};


const App = () => (
  <div className="App">
    <Dashboard />
  </div>
);

export default App;
