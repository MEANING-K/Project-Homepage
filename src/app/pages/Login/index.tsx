/* eslint-disable prettier/prettier */
import * as React from 'react';
import styled from 'styled-components';
import { Footer } from 'app/components/Footer';
import { Header } from 'app/components/Header';
import { Helmet } from 'react-helmet-async';
import { EmailIcon, PasswordIcon } from 'app/components/svg';

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: aliceblue;
`;

const LoginForm = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  margin: 4rem;
  background-color: purple;
`;

const IdPass = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  height: 25px;
  margin-bottom: 0.7rem;
  margin-left: 0.3rem;
  flex-grow: 1;
  background-color: transparent;
`;

const StyledEmailIcon = styled(EmailIcon)`
  height: 20px;
  width: 20px;
  margin-right: 5px;
  margin-bottom: 12px;
`;

const StyledPasswordIcon = styled(PasswordIcon)`
  height: 20px;
  width: 20px;
  margin-right: 5px;
  margin-bottom: 12px;
`;

const Submit = styled.input`
  width: 230px;
  height: 30px;
  border: none;
  border-radius: 5px;
  margin-top: 0.5rem;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.7rem;
`;

export function Login() {
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login" />
      </Helmet>
      <Header />
      <Body>
        <LoginForm>
          <Wrapper>
            <StyledEmailIcon />
            <IdPass type="text" placeholder="Email" />
          </Wrapper>
          <Wrapper>
            <StyledPasswordIcon />
            <IdPass type="password" placeholder="Password" />
          </Wrapper>
          <Submit type="submit" value="Login" />
        </LoginForm>
      </Body>
      <Footer />
    </>
  );
}
