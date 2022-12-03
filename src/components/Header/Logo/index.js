import styled from 'styled-components';

import { ReactComponent as LogoSvg } from '../../../assets/images/fups.svg';


const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Logo = () => (
    <LogoContainer>
        <LogoSvg />
    </LogoContainer>
);

export default Logo;