import { Row, Col, Button, Form, Input } from 'antd';



import styled from 'styled-components';

// import Loading from '../../lotties/index';

import { ReactComponent as Logo } from '../../assets/images/fups.svg';
import FooterBg from '../../assets/images/footer-bg.svg';
import FeaturesBg from '../../assets/images/login-image.png';
import { ReactComponent as QrIcon } from '../../assets/images/icon-qr.svg';
import { ReactComponent as MobileIcon } from '../../assets/images/icon-mobile.svg';
import { ReactComponent as PersonIcon } from '../../assets/images/icon-person.svg';


const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 2% 3%;

  .ant-btn {
    height: 100%;
    padding: 19px 32px;
    border-radius: 12px;
    border: solid 2px #dcdce6;

    span {
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.6px;
      text-align: center;
      color: #17171a;
    }
  }
`

const LoginContainer = styled.div`
    height: 100%;

    background-color: #fff
    background-color: #fff;
    background: url('${FooterBg}') no-repeat left bottom #fff;
    background-size: auto 50%;

    @media (max-width: $breakpoint-tablet) {
        padding: 0;
    }

    #login-form .ant-btn {
        height: 42px;
        letter-spacing: 1px;
        border-radius: 6px;
        border-radius: 12px;
        background-color: #155ed4;
    }

    #login-form_password {
        background-color: #f5f5fa
    }
`

const FullHeightRow = styled(Row)`
  height: 100%;
`

const FullHeightCol = styled(Col)`
  height: 100%;
  padding: 1%;
`

const LoginFormContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row-reverse;
    background-color: white;
    overflow: hidden;
    margin: 0 auto;

    #login-form {
        flex: 1 0 100%;
        max-width: 480px;
        width: 100%;
        padding: 60px;

        p {
            margin-bottom: 30px;

            &.form-title {
            color: #333333;
            font-family: 'Josefin Sans', sans-serif;
            font-size: 42px;
            font-weight: bold;
            line-height: 1;
            margin-bottom: 0;
            }
        }
    }
`

const FeaturesContainer = styled.div`
  color: #fff;
  padding: 30% 10% 0;
  height: 100%;
  border-radius: 12px;
  background: url('${FeaturesBg}') no-repeat center bottom #17171a;
  background-size: 100% auto;

  h2 {
    color: #fff;
    font-size: 24px;
  }

  p {
    display: inline-block;
    padding-left: 10px;
    font-size: 16px;
    color: #dcdce6;
  }
`

const Feature = styled.div`
  font-size: 16px;
  line-height: initial;
  color: #dcdce6;

  display: inline-flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 10px;

  span:first-of-type {
    margin-right:10px;
  }
`

const LoginForm = () => {
  return (
    <LoginFormContainer>
      FORM
    </LoginFormContainer>
  );
}

const Login = () => {
  return (
    <LoginContainer>
      <FullHeightRow>
        <FullHeightCol
          xs={{ span:24, order: 2 }}
          sm={{ span:24, order: 2 }}
          md={{ span:18, order: 2 }}
          lg={{ span:18, order: 1 }}
          xl={{ span:18, order: 1 }}
        >
          <Header>
            <Logo />
            <Button size={"large"}>KAYIT OL</Button>
          </Header>
          <LoginForm></LoginForm>
        </FullHeightCol>

        <FullHeightCol
          xs={{ span:24, order: 1 }}
          sm={{ span:24, order: 1 }}
          md={{ span:24, order: 1 }}
          lg={{ span:6, order: 2 }}
          xl={{ span:6, order: 2 }}
        >
          <FeaturesContainer>
            <h2>Nasıl giriş yaparım?</h2>

            <Feature>
              <span><MobileIcon /></span>
              <span>Telefonunuzdan Fups uygulamasını açın.</span>
            </Feature>

            <Feature>
              <span><PersonIcon /></span>
              <span>Profil fotoğrafınızdaki QR ikonuna basın.</span>
            </Feature>

            <Feature>
              <span><QrIcon /></span>
              <span>QR Kodu okutarak internet şubeye giriş yapabilirsiniz.</span>
            </Feature>
          </FeaturesContainer>
        </FullHeightCol>
      </FullHeightRow> 
    </LoginContainer>
  );
}

export default Login;
