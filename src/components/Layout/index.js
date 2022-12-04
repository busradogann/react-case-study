import { Col, Row } from 'antd';

import styled from 'styled-components';


export const SectionContainer = styled.section`
  padding: 0 40px;
  margin-bottom: 5rem;
`

export const SectionTitle = styled.h3`
  color: #17171a;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 24px 40px;
`

export const Section = (props) => (
    <SectionContainer>
      <Row>
        <Col span={22}>
            <SectionTitle>{props.title}</SectionTitle>
        </Col>
        <Col>
            {props.titleRight}
        </Col>
      </Row>
      {props.children}
    </SectionContainer>
);