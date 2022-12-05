import styled from 'styled-components';


const SectionContainer = styled.section`
  padding: 0 40px;
  margin-bottom: 3rem;
`

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const SectionTitle = styled.h3`
  color: #17171a;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 24px 40px;
`

const SectionRight = styled.div`
  a {
    display: inline-flex;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.2px;
    color: #155ed4;
  }
`

export const Section = (props) => (
  <SectionContainer>
    <SectionHeader>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionRight>{props.titleRight}</SectionRight>
    </SectionHeader>
    {props.children}
  </SectionContainer>
);

export const PureSection = styled(SectionContainer)`
  margin: 0 40px;
  height: 200px;
  border-radius: 12px;
  background-color: #fff;
  background: url('${props => props.background}') no-repeat right center #fff;
  background-size: auto 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h3 {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.6px;
    color: #17171a;
  }

  p {
    font-size: 16px;
    color: #606066;
  }

  a {}
`
