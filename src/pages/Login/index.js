import React, { useEffect, useState} from 'react';
import { Row, Col, Button, Form, Input, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../../hooks';
import styled from 'styled-components';

import './index.less';

import { ReactComponent as Logo } from '../../assets/images/fups.svg';
import FooterBg from '../../assets/images/footer-bg.svg';
import FeaturesBg from '../../assets/images/login-image.png';
import { ReactComponent as QrIcon } from '../../assets/images/icon-qr.svg';
import { ReactComponent as MobileIcon } from '../../assets/images/icon-mobile.svg';
import { ReactComponent as PersonIcon } from '../../assets/images/icon-person.svg';
import Loading from '../../components/Loading';


const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 2% 3%;

  @media screen and (max-width: 990px) {
    position: fixed;
    top: 0!important;
    background-color: #000;
    opacity: 0.9;
    z-index: 99999;
    width: 100%;
    margin: 0;
    padding: 1%;
  }

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
    background-size: auto 25%;

    @media (max-width: $breakpoint-tablet) {
      padding: 0;
    }

    #login-form .ant-btn {
      height: 42px;
      letter-spacing: 1px;
      border-radius: 12px;
    }

    #login-form_password {
      background-color: #f5f5fa;
      border-radius: 12px;
      height: 56px;
      border: none;
      width: 100%;
      text-indent: 5%;
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

const FormTitle = styled.h2`
  font-family: SofiaPro;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 0.56px;
  color: #17171a;
`

const FormDescription = styled.p`
  font-size: 16px;
  color: #606066;
`

const FormInput = styled.input` 
  border-radius: 12px;
  background-color: #f5f5fa;
  height: 56px;
  border: none;
  width: 100%;
  text-indent: 5%;
`

const LoginForm = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", false);
  const [username, setUserName] = useLocalStorage("username");
  const [accountType, setAccountType] = useLocalStorage("accountType");

  const navigate = useNavigate();

  const {setLoginPending} = props;

  const onFinish = values => {
    setLoginPending(true);
    setTimeout(() =>  {
      setUserName(values.username);
      setIsLoggedIn(true);
    }, 2000);
  };

  const onFinishFailed = errorInfo => {
    setLoginPending(false);
  };

  const onChange = value => {
    setAccountType(value);
  };
  
  const onSearch = value => {
  };

  useEffect(() => {
    if (isLoggedIn === true) {
      navigate('/');
    }
  }, [isLoggedIn]);


  return (
    <LoginFormContainer>
      <div className="login-box">
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <FormTitle className="form-title">Kullanıcı Girişi</FormTitle>
          <FormDescription>Ad soyad ve şifren ile Fups hesabına giriş yapabilirsin.</FormDescription>
          <Form.Item>
          <Select
            showSearch
            placeholder="Kullanıcı Tipi"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: 'Standart Hesap',
                label: 'Standart Hesap',
              },
              {
                value: 'Onaylı Hesap',
                label: 'Onaylı Hesap',
              },
              {
                value: 'Premium Hesap',
                label: 'Premium Hesap',
              },
            ]}
            style={{
              padding: '15px',
              borderRadius: '12px',
              backgroundColor: '#f5f5fa' }}
          />
          </Form.Item>

          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Lütfen kullanıcı adınızı girin!' }]}
          >
            <FormInput
              className='input-error-border'
              placeholder="Kullanıcı Adı"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Lütfen şifrenizi girin!' }]}
          >
            <Input.Password 
              className='input-error-border'
              style={{ border: 'none', borderRadius: '12px', backgroundColor: '#f5f5fa'}}
              placeholder="Şifren"
            />
          </Form.Item>

          <Form.Item>
            <a href='#'>Şifremi Unuttum</a>
            <Button type='primary' htmlType="submit">
              Giriş Yap
            </Button>
          </Form.Item>
        </Form>
      </div>
    </LoginFormContainer>
  );
}

const Login = () => {
  const [isLoginPending, setLoginPending] = useState(false);

  return (
    <LoginContainer>
        { isLoginPending && 
          <div>
            <Loading />
          </div> 
        }

      <FullHeightRow>
        <FullHeightCol
          xs={{ span:24, order: 2 }}
          sm={{ span:24, order: 2 }}
          md={{ span:24, order: 2 }}
          lg={{ span:18, order: 1 }}
          xl={{ span:18, order: 1 }}
        >
          <Header>
            <Logo />
            <Button size={"large"}>KAYIT OL</Button>
          </Header>
          <LoginForm setLoginPending={setLoginPending}></LoginForm>
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
